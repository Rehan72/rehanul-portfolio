import Section from "./Section.jsx";

export default function Experience() {
  return (
    <Section id="experience">
      <h2 className="text-2xl md:text-3xl">Experience</h2>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <h3 className="text-lg font-medium">
            Frontend Developer • <a href="#" target="_blank" rel="noreferrer">saminTekmind.com</a>
          </h3>
          <p className="text-subtext">3.5 years • EV Charging Management System</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-subtext">
            <li>Built real-time dashboard UIs for station status and session telemetry.</li>
            <li>Optimized bundle size and rendering for large data tables and maps.</li>
            <li>Implemented resilient API handling with retries, caching, and graceful fallback states.</li>
            <li>Improved accessibility and performance across mobile and desktop.</li>
          </ul>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-medium">Network Engineer</h3>
          <p className="text-subtext">2.5 years</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-subtext">
            <li>Maintained and optimized network reliability and throughput.</li>
            <li>Diagnosed latency, packet loss, and DNS issues for critical services.</li>
            <li>Collaborated with dev teams on API performance and system design.</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}