import { css } from "@emotion/react";
import { CONTRACT_ADDRESSES } from "../utils/env-vars";
import { zorbImageDataURI } from '@zoralabs/zorb'

export const Footer = () => {
  return (
    <footer
      css={css`
        height: var(--footer-height);
        border-top: var(--border-black);
        a {
          text-decoration: none;
        }
      `}
    >
      <a target="_blank" href="https://zora.co" className="zora-branding">
        ☼☽
      </a>
      <a target="_blank" className="docs-link" href="https://docs.zora.co">
        <img className="zora-zorb" src={zorbImageDataURI(CONTRACT_ADDRESSES)} alt="ZORB" /> Powered by Zora
      </a>
    </footer>
  );
};
