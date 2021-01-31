import React from "react";
import GitHub from "../assets/github-alt.svg";
import config from "../lib/config";

export function SocialList({}) {
  return (
    <div>
      <a
        title="GitHub"
        href={`https://github.com/f1reboywatergrl`}
        target="_blank"
        rel="noopener"
      >
        <GitHub width={24} height={24} fill={"#222"} />
      </a>
      <style jsx>{`
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 2em;
        }
      `}</style>
    </div>
  );
}
