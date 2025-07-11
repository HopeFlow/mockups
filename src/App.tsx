import React from "react";

function Bolt() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
      />
    </svg>
  );
}

function ChatBubble() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
      />
    </svg>
  );
}

function ViewFinder() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
}

function Timeline() {
  const history = [
    {
      username: "vedadian",
      avatar: "/img/bv1361.jpeg",
      description: "Started the quest",
      timestamp: "Feb 27, 2025, 9:35 AM GMT+3:30",
      icon: Bolt,
    },
    {
      username: "zhn1010",
      avatar: "/img/zhn1010.jpeg",
      description: "Commented on the quest",
      timestamp: "Feb 27, 2025, 10:00 AM GMT+3:30",
      content:
        "I saw a similar bike in my neighborhood last week. I'll keep an eye out for it!",
      icon: ChatBubble,
    },
    {
      username: "you 😊",
      avatar: "/img/user.jpeg",
      timestamp: "Your action would be appreciated 🙌",
      icon: ViewFinder,
    },
  ];
  return (
    <div className="relative flex flex-col">
      <div className="absolute left-3 top-0 h-[calc(100%-1.5rem)] w-1 bg-gray-300" />
      {history.map((event, index) => (
        <React.Fragment key={index}>
          <div className="relative z-10 flex flex-row items-start gap-3">
            <div className="w-6 h-6 bg-base-100">
              {React.createElement(event.icon)}
            </div>
            <div className="w-6 h-6 basis-6 flex-shrink-0 rounded-full overflow-hidden">
              <img
                src={event.avatar}
                alt={`${event.username}'s avatar`}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-semibold">{event.username}</span>
                <span className="text-sm text-gray-500">{event.timestamp}</span>
              </div>
              {event.description && (
                <div className="flex items-center gap-2">
                  <span>{event.description}</span>
                </div>
              )}
              {event.content && (
                <p className="p-2 rounded-box bg-gray-400 text-gray-700">
                  {event.content}
                </p>
              )}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

function ShareTree() {
  return (
    <svg
      width="223"
      height="398.5"
      viewBox="-32 -32 223 398.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="relative"
      style={{
        transform: "rotate(90deg) translateX(-120px) translateY(-25%)",
      }}
    >
      <g>
        <path
          d="M 32 199.25 L 32 270.5 M 32 64 L 32 135.25"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke="rgba(0,0,0,0.2)"
          stroke-width="10"
          className="transition-all duration-200"
          filter="blur(2px)"
        ></path>
        <path
          d="M 32 199.25 L 32 270.5 M 32 64 L 32 135.25"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke="currentColor"
          stroke-width="8"
          className="text-information-border-secondary transition-all duration-200"
        ></path>
      </g>
      <g>
        <circle
          cx="32"
          cy="302.5"
          r="32"
          stroke-width="8"
          fill="transparent"
          className="stroke-information-border-secondary"
        ></circle>
        <circle
          cx="32"
          cy="302.5"
          r="32"
          stroke-width="1"
          stroke="white"
          fill="white"
        ></circle>
        <mask id="mask-0-32-302.5">
          <circle
            cx="32"
            cy="302.5"
            r="32"
            stroke-width="0"
            fill="white"
          ></circle>
        </mask>
        <image
          x="0"
          y="270.5"
          width="64"
          height="64"
          href="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ4Vk5ad0VoREtCTkNBRnVXVVV0TDkwQkFWNCJ9"
          mask="url(#mask-0-32-302.5)"
          className="filter transition duration-300"
        ></image>
        <text
          x="70.4"
          y="294.5"
          className="font-body font-bold text-helper leading-helper fill-information-content-primary"
          data-content="Behrooz. Vedadian"
          style={{ fontSize: "11px" }}
        >
          Behrooz. V…
        </text>
        <text
          x="70.4"
          y="310.5"
          className="font-body font-regular text-[10px] leading-[13px] fill-information-content-secondary"
          data-content="29 days ago"
          style={{ fontSize: "11px" }}
        >
          29 days ago
        </text>
      </g>
      <g>
        <circle
          cx="32"
          cy="167.25"
          r="32"
          stroke-width="8"
          fill="transparent"
          className="stroke-information-border-secondary"
        ></circle>
        <circle
          cx="32"
          cy="167.25"
          r="32"
          stroke-width="1"
          stroke="white"
          fill="white"
        ></circle>
        <mask id="mask-0-32-167.25">
          <circle
            cx="32"
            cy="167.25"
            r="32"
            stroke-width="0"
            fill="white"
          ></circle>
        </mask>
        <image
          x="0"
          y="135.25"
          width="64"
          height="64"
          href="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycExNVXJ3ZXJXUE9VdEgzMXdsQzVOWnJZbUcifQ"
          mask="url(#mask-0-32-167.25)"
          className="filter transition duration-300"
        ></image>
        <g transform="translate(40, 183.25)">
          <svg
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z"
              fill="#BFC8D0"
            ></path>
            <path
              d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z"
              fill="url(#paint0_linear_87_7264)"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z"
              fill="white"
            ></path>
            <path
              d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z"
              fill="white"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_87_7264"
                x1="26.5"
                y1="7"
                x2="4"
                y2="28"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5BD066"></stop>
                <stop offset="1" stop-color="#27B43E"></stop>
              </linearGradient>
            </defs>
          </svg>
        </g>
        <text
          x="70.4"
          y="159.25"
          className="font-body font-bold text-helper leading-helper fill-information-content-primary"
          data-content="Saeed Torabzadeh"
          style={{ fontSize: "11px" }}
        >
          Saeed Tora…
        </text>
        <text
          x="70.4"
          y="175.25"
          className="font-body font-regular text-[10px] leading-[13px] fill-information-content-secondary"
          data-content="29 days ago"
          style={{ fontSize: "11px" }}
        >
          29 days ago
        </text>
        <g>
          <circle
            cx="57.6"
            cy="141.65"
            r="16"
            className="fill-gray-100"
            stroke="silver"
            stroke-width="2"
          ></circle>
          <text
            x="57.6"
            y="149.65"
            text-anchor="middle"
            className="font-body font-bold text-[10px] leading-[10px] fill-white pointer-events-none text-xl"
          >
            🥈
          </text>
        </g>
      </g>
      <g>
        <circle
          cx="32"
          cy="32"
          r="32"
          stroke-width="8"
          fill="transparent"
          className="stroke-information-border-secondary"
        ></circle>
        <circle
          cx="32"
          cy="32"
          r="32"
          stroke-width="1"
          stroke="white"
          fill="white"
        ></circle>
        <mask id="mask-0-32-32">
          <circle cx="32" cy="32" r="32" stroke-width="0" fill="white"></circle>
        </mask>
        <image
          x="0"
          y="0"
          width="64"
          height="64"
          href="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ4T2FLRktxbGFQTTc2TDJCbTVUM2p3OHpVbCJ9"
          mask="url(#mask-0-32-32)"
          className="filter transition duration-300"
        ></image>
        <g transform="translate(40, 48)">
          <svg
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="16"
              cy="16"
              r="14"
              fill="url(#paint0_linear_87_7225)"
            ></circle>
            <path
              d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z"
              fill="white"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_87_7225"
                x1="16"
                y1="2"
                x2="16"
                y2="30"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#37BBFE"></stop>
                <stop offset="1" stop-color="#007DBB"></stop>
              </linearGradient>
            </defs>
          </svg>
        </g>
        <text
          x="70.4"
          y="24"
          className="font-body font-bold text-helper leading-helper fill-information-content-primary"
          data-content="Behrooz Vedadian"
          style={{ fontSize: "11px" }}
        >
          Behrooz Ve…
        </text>
        <text
          x="70.4"
          y="40"
          className="font-body font-regular text-[10px] leading-[13px] fill-information-content-secondary"
          data-content="29 days ago"
          style={{ fontSize: "11px" }}
        >
          29 days ago
        </text>
        <g>
          <circle
            cx="57.6"
            cy="6.399999999999999"
            r="16"
            className="fill-gray-100"
            stroke="gold"
            stroke-width="2"
          ></circle>
          <text
            x="57.6"
            y="14.399999999999999"
            text-anchor="middle"
            className="font-body font-bold text-[10px] leading-[10px] fill-white pointer-events-none text-xl"
          >
            🏆
          </text>
        </g>
      </g>
    </svg>
  );
}

function App() {
  return (
    <div className="w-full h-auto flex flex-col p-6 gap-3">
      <h1>Stolen Sentimental Trek</h1>
      <img
        className="w-full rounded-box"
        src="/img/bounty-trek-520-grando-51cm-v0-skkyfex4c46f1.jpg"
        alt="Cover"
      />
      <div className="collapse bg-accent/15 border-accent text-accent-content border">
        <input type="checkbox" />
        <div className="collapse-title pr-4 font-semibold flex flex-row justify-between">
          🌺 Your action may be crucial
          <div className="badge badge-outline badge-accent">More</div>
        </div>
        <div className="collapse-content text-sm text-justify">
          <p>
            Out of the <b>300</b> individuals who have visited this quest,{" "}
            <b>no one</b>😢 has taken action. The success of <i>HopeFlow</i>{" "}
            quests relies upon word being spread, so that those who hold the
            answers may be reached.
          </p>
          <p>
            <b>Your contribution</b> could be <b>the spark that helps</b>🌱 this
            quest tree flourish and draws forth the ones destined to respond
            🌳😊.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden text-lg transition-[max-height] duration-1000 max-h-48 pb-4">
        <p>
          My trek 520 grando was stolen last week. 51cm height. The red pusher
          pedals might help as well. Please let me know if you happen across one
          on your local online marketplace (anywhere in the US). If seen in
          public, please ask the owner politely where they bought it, and if you
          can see the serial number. It's WTU216LK0060R
        </p>
        <p>
          I am offering $20 dollars for each post of a Trek 520 Grando with the
          same color scheme in these photos as well as the exact same height (51
          cm). Heights of 49, 50, 52, 53 will be rewarded $10. Can pay out
          reward with Paypal, Amazon gift cards, venmo, zelle or crypto. $300
          bounty if my bike is found and an extra $200 if I manage to recover
          it.
        </p>
        <p>
          I have a lot of sentimental value in this bike. Mom passed shortly
          before our first child was born. We moved temporarily 1.5 hrs commute
          away to my in-laws and this trek helped me with the last 5 miles of
          the commute back from work.
        </p>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white from-15% to-transparent transition-opacity duration-700 pointer-events-none" />
        <div className="absolute bottom-0">
          <a
            className="link link-primary"
            onClick={(e) => {
              e.preventDefault();
              const l = e.target as HTMLAnchorElement;
              const g = l.parentElement!.previousElementSibling!;
              const p = l.parentElement!.parentElement!;
              g.classList.toggle("opacity-0");
              p.style.maxHeight =
                p.style.maxHeight === "100rem" ? "" : "100rem";
              l.textContent =
                l.textContent === "Read more..."
                  ? "Read less..."
                  : "Read more...";
            }}
          >
            Read more...
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-3 text-lg">
        <div className="flex flex-row gap-2 items-center">
          <p className="flex-1">
            <i>Have the answer? become the hero of this story and</i>
          </p>
          <button className="block btn btn-primary w-24">Connect</button>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <p className="flex-1">
            <i>
              You may know someone who might have the answer. Share this quest
              via
            </i>
          </p>
          <button className="block btn btn-secondary w-24">Reflow</button>
        </div>
      </div>
      <div className="collapse bg-base border-none text-info-content border">
        <input type="checkbox" />
        <div className="collapse-title pr-4 font-semibold flex flex-row justify-between">
          🎬 What has happened
          <div className="badge badge-outline badge-info">Show</div>
        </div>
        <div className="collapse-content text-sm text-info-content text-justify">
          <Timeline />
        </div>
      </div>
      <div className="collapse bg-base border-none text-success-content border">
        <input type="checkbox" />
        <div className="collapse-title pr-4 font-semibold flex flex-row justify-between">
          🌱 Watch the tree grow
          <div className="badge badge-outline badge-success">Watch</div>
        </div>
        <div className="collapse-content text-sm text-info-content text-justify">
          <ShareTree />
        </div>
      </div>
    </div>
  );
}

export default App;
