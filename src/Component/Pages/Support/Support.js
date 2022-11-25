import React from "react";

const Support = () => {
  return (
    <div className="my-6">
      <h1 className="lg:text-6xl text-3xl text-center font-bold">
        Speedy & Superior 24x7 Support
      </h1>
      <div className="divider"></div>
      <p className="text-md text-center my-4">
        Our Support Squad boasts of a strong 50+ team to provide best in the
        industry assistance and guidance round the clock
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-center items-center place-items-center">
        <div className="card w-96 bg-secondary text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-4xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </h2>
            <h2 className="card-title text-4xl">10 Seconds</h2>
            <div className="card-actions justify-end">
              <div className="h-1 bg-white w-16"></div>
            </div>
            <p>Average wait time for our customers</p>
          </div>
        </div>
        <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-4xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </h2>
            <h2 className="card-title text-4xl">60 Seconds</h2>
            <div className="card-actions justify-end">
              <div className="h-1 bg-white w-16"></div>
            </div>
            <p>Live Chat Response Time</p>
          </div>
        </div>
        <div className="card w-96 bg-info text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-4xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </h2>
            <h2 className="card-title text-4xl">4.65/5</h2>
            <div className="card-actions justify-end">
              <div className="h-1 bg-white w-16"></div>
            </div>
            <p>CSAT Score</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
