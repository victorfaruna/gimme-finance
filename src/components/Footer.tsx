import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-black px-10 md:px-20 text-color-main/80 text-[0.8rem] md:text-[1rem]">
      <div className="py-[3rem] md:py-[7rem]">
        <p className="font-bold text-[1.5rem] md:text-[3rem] text-center leading-none text-color-main">
          Get financial simplicity <br />
          at your fingertips
        </p>

        <div className="buttons flex items-center justify-center flex-wrap gap-2 text-[0.7rem] font-bold mt-5">
          <button className="cursor-pointer adroid py-[0.5rem] px-[0.9rem] rounded-sm border border-color-main/40 flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-apple size-4"
              viewBox="0 0 16 16"
            >
              <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
              <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
            </svg>
            <p>Get on iPhone</p>
          </button>
          <button className="cursor-pointer ios py-[0.5rem] px-[0.9rem] rounded-sm border border-color-main/40 flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-google-play size-4"
              viewBox="0 0 16 16"
            >
              <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27" />
            </svg>
            <p>Get on Adroid</p>
          </button>
        </div>
      </div>
      <hr className="border-color-main/20" />
      <div className="py-[3rem] md:py-[7rem] flex flex-col md:flex-row md:justify-center flex-wrap gap-[3rem] md:gap-[4rem]">
        <div className="far-left flex flex-col gap-4">
          <Logo theme="dark" />
          <p className="max-w-[300px]">
            A financial inclusive world with everyone, for everyone powered by
            Blockchain and Ai.
          </p>
        </div>

        <div className="left flex flex-col gap-4">
          <p className="font-bold">Gimme</p>
          <ul>
            <li>
              <Link href="/#features">Features</Link>
            </li>
            <li>
              <Link href="/#features">Privacy Polincy</Link>
            </li>
            <li>
              <Link href="/#features">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        <div className="left flex flex-col gap-4">
          <p className="font-bold">Extra</p>
          <ul>
            <li>
              <Link href="/#features">Download</Link>
            </li>
            <li>
              <Link href="/#features">Support</Link>
            </li>
            <li>
              <Link href="/#features">Refund Policy</Link>
            </li>
          </ul>
        </div>

        <div className="left flex flex-col gap-4">
          <p className="font-bold">Follow us on social media</p>
          <ul className="flex gap-4 flex-wrap">
            <li>
              <Link
                href="https://linkedin.com/company/gimmefinance"
                className="flex items-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-linkedin size-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://x.com/GimmeFinance"
                className="flex items-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-twitter-x size-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
                Twitter
              </Link>
            </li>
            <li>
              <Link
                href="https://gimme.finance"
                className="flex items-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-medium size-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8m4.95 0c0 2.34-1.01 4.236-2.256 4.236S9.463 10.339 9.463 8c0-2.34 1.01-4.236 2.256-4.236S13.975 5.661 13.975 8M16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795" />
                </svg>
                Medium
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
