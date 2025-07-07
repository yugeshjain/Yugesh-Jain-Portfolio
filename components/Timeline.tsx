import Link from 'next/link';
import { useState } from 'react';

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = (props) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">
          {props.title}
        </p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{props.children}</p>
    </li>
  );
};

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Year>October 2024</Year>
      <ul>
        <Step title="Software Engineer III – Walmart">
          Delivered high-impact features and improved test/build processes, earning accolades for performance within 6 months.
        </Step>
      </ul>

      <Year>April 2023</Year>
      <ul>
        <Step title="Android Engineer Intern – Mutual Mobile Pvt Ltd">
          Led UI migration to Jetpack Compose, enhanced CI/CD, and integrated hardware like fingerprint/palm scanners.
        </Step>
      </ul>

      <Year>April 2022</Year>
      <ul>
        <Step title="Associate Android Engineer – Mutual Mobile Pvt Ltd">
          Collaborated cross-functionally to deliver Android apps while mentoring interns and driving Kotlin-based development.
        </Step>
      </ul>

      <Year>January 2022</Year>
      <ul>
        <Step title="Android Engineer Intern – Mutual Mobile Pvt Ltd">
          Gained hands-on experience in Android development, legacy code migration, and Jetpack Compose exploration.
        </Step>
      </ul>
    </>
  );
}
