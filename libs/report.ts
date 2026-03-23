import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/latest/dist/bundle.js'

export function handleK6Summary(data: unknown) {
    return { 'summary.html': htmlReport(data)};
    }
