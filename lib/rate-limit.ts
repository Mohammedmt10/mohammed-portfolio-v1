interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}

const rateLimitMap = new Map<string, number[]>();

/**
 * Basic IP-based sliding window rate limiter.
 * Keeps track of request timestamps in-memory.
 * 
 * @param ip Client IP address to rate limit
 * @param limit Maximum number of allowed requests in the window
 * @param windowMs Window duration in milliseconds
 */
export function rateLimit(ip: string, limit: number, windowMs: number): RateLimitResult {
  const now = Date.now();
  let timestamps = rateLimitMap.get(ip) || [];

  // Filter out timestamps older than the window
  timestamps = timestamps.filter((time) => now - time < windowMs);

  if (timestamps.length >= limit) {
    const oldestTimestamp = timestamps[0];
    const reset = oldestTimestamp + windowMs;
    return {
      success: false,
      limit,
      remaining: 0,
      reset,
    };
  }

  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);

  // Periodic self-cleanup of inactive IPs when the map grows large
  if (rateLimitMap.size > 1000) {
    for (const [key, times] of rateLimitMap.entries()) {
      const valid = times.filter((time) => now - time < windowMs);
      if (valid.length === 0) {
        rateLimitMap.delete(key);
      } else {
        rateLimitMap.set(key, valid);
      }
    }
  }

  return {
    success: true,
    limit,
    remaining: limit - timestamps.length,
    reset: now + windowMs,
  };
}
