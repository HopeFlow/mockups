import React, { useState } from "react";

function Arrow() {
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
        d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

function Share() {
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
        d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
      />
    </svg>
  );
}

function Eye() {
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
        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
}

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
      timestamp: "Feb 27, 2025, 9:35 AM",
      icon: Bolt,
    },
    {
      username: "zhn1010",
      avatar: "/img/zhn1010.jpeg",
      description: "Commented on the quest",
      timestamp: "Feb 27, 2025, 10:00 AM",
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
  return null;
}

function App() {
  const [intoVisible, setIntoVisible] = useState(true);
  return (
    <div className="relative w-full h-auto flex flex-col p-6 gap-3">
      <h1 className="font-bold text-2xl">Stolen Sentimental Trek</h1>
      <div className="relative group">
        <input
          type="checkbox"
          className="absolute z-20 left-0 top-0 right-0 bottom-0 opacity-0 cursor-pointer"
        />
        <img
          className="w-full rounded-box"
          src="/img/bounty-trek-520-grando-51cm-v0-skkyfex4c46f1.jpg"
          alt="Cover"
        />
        <div className="absolute rounded-box z-10 p-4 bottom-0 w-full bg-secondary-content/35 group-has-[:checked]:opacity-0 opacity-100 transition-opacity duration-700 text-secondary font-bold flex flex-row gap-4 items-center">
          <div className="flex flex-row items-center gap-2">
            <div className="inline-block">
              <Eye />
            </div>
            300
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="inline-block">
              <Share />
            </div>
            10
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="inline-block">
              <Arrow />
            </div>
            3
          </div>
          <div className="flex-1"></div>
          <progress
            className="progress progress-secondary max-w-20"
            value="50"
            max="100"
          ></progress>
          <div className="badge badge-outline">More</div>
        </div>
        <div className="absolute rounded-box z-10 p-4 bottom-0 h-full w-full bg-secondary-content/85 group-has-[:checked]:opacity-100 opacity-0 transition-opacity duration-700 text-secondary font-bold flex flex-col gap-3 items-start">
          <div className="flex flex-row items-center gap-2">
            <div className="inline-block">
              <Eye />
            </div>
            300 people has seen this page
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="inline-block">
              <Share />
            </div>
            10 has taken action
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="inline-block">
              <Arrow />
            </div>
            3 leads are submitted
          </div>
          <div className="flex-1"></div>
          <div>
            <progress
              className="progress progress-secondary max-w-100"
              value="50"
              max="100"
            ></progress>{" "}
            Halfway to desired action/view ratio
          </div>
          <div className="badge badge-outline self-end">Less</div>
        </div>
      </div>
      <div className="collapse bg-warning-content text-warning border border-warning">
        <input type="checkbox" />
        <div className="collapse-title pr-4 font-semibold flex flex-row justify-between">
          🌺 Your action may be crucial
          <div className="badge badge-outline text-warning">More</div>
        </div>
        <div className="collapse-content text-sm text-justify">
          <p>
            Out of the <b>300</b> individuals who have visited this quest,{" "}
            <b>only 10</b>😢 has taken action. The success of <i>HopeFlow</i>{" "}
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
        <p className="mb-2">
          My trek 520 grando was stolen last week. 51cm height. The red pusher
          pedals might help as well. Please let me know if you happen across one
          on your local online marketplace (anywhere in the US). If seen in
          public, please ask the owner politely where they bought it, and if you
          can see the serial number. It's WTU216LK0060R
        </p>
        <p className="mb-2">
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
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-base-100 from-15% to-transparent transition-opacity duration-700 pointer-events-none" />
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
        <button className="block btn btn-primary">Submit a lead</button>
        <button className="block btn btn-secondary">Share via Reflow</button>
      </div>
      <div className="collapse bg-base border-none text-info border">
        <input type="checkbox" />
        <div className="collapse-title font-semibold flex flex-row justify-between pr-0 pl-0 pb-0">
          🎬 What has happened
          <div className="badge badge-outline badge-info">Show</div>
        </div>
        <div className="collapse-content text-sm text-info-content text-justify">
          <Timeline />
        </div>
      </div>
      <div className="collapse bg-base border-none text-success border">
        <input type="checkbox" />
        <div className="collapse-title font-semibold flex flex-row justify-between pr-0 pl-0 pb-0">
          🌱 Watch the tree grow
          <div className="badge badge-outline badge-success">Watch</div>
        </div>
        <div className="collapse-content text-sm text-success text-justify">
          <ShareTree />
        </div>
      </div>
      <div
        className={
          "absolute z-30 left-0 top-0 right-0 bottom-0 bg-success text-success-content" +
          (intoVisible ? "" : " hidden")
        }
      >
        <IntroText done={() => setIntoVisible(false)} />
      </div>
    </div>
  );
}

function IntroText({ done }: { done: () => void }) {
  const animateIntro = (p: HTMLDivElement | null) => {
    if(!p) return;
    const d = document.createElement("div");
    d.textContent =  "Saeed, please help find Behrooz's stolen Trek 520 Grando.";
    for(const [k, v] of Object.entries({
      left: "1rem",
      top:"1rem",
      position: "absolute",
      fontSize: "32px",
      fontWeight: "100",
      opacity: "0",
      maxWidth: "80%",
      transition: "opacity",
      transitionDuration: "1500ms"
    })) {
      d.style[k as unknown as keyof CSSStyleDeclaration] = v;
    }
    p.appendChild(d);
    setTimeout(() => {d.style.opacity = "1"}, 300);
    setTimeout(() => {d.style.opacity = "0"}, 1300);
    setTimeout(done, 2500);
  };
  return <div className="absolute left-0 top-0 right-0 bottom-0" ref={r => animateIntro(r)}></div>;
}

export default App;
