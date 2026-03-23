import http from 'k6/http';
import { check, group } from 'k6';
import { handleK6Summary } from '../../../libs/report';

// k6 options for test execution
export const options = {
  vus: Number(__ENV.virtualUsers || 1),
  duration: `${__ENV.durationSeconds || 1}s`,
  insecureSkipTLSVerify: true,
  }

export default function () {
  const url = __ENV.APP_URL;

  const response = http.get(url, {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      }
    });

  check(response, {
    "status is 200": (r) => r.status === 200,
    "body is not empty": (r) => r.body && r.body.length > 0,
  });
  }

export function handleSummary(data: unknown) {
  return handleK6Summary(data);
  }
