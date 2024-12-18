import { SVGProps } from 'react';

const GREEN = '#007934';
const WHITE = '#FFFFFF';
const GRAY = '#A8AEB8';
const RED = '#CB0808';

type TColors = {
  border: string;
  fill: string;
  center: string;
  shadow: string;
  mask: string;
};

type TIconType = 'primary' | 'secondary';

const styles: Record<TIconType, TColors> = {
  primary: {
    border: RED,
    fill: RED,
    center: WHITE,
    shadow: GRAY,
    mask: WHITE,
  },
  secondary: {
    border: GREEN,
    fill: WHITE,
    center: GREEN,
    shadow: GRAY,
    mask: WHITE,
  },
};

interface IProps extends SVGProps<SVGSVGElement> {
  type?: 'primary' | 'secondary';
}

export default function mapIcon(props?: IProps) {
  const { type = 'primary' } = props || {};

  const colors = styles[type];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 38"
      fill="none"
      {...props}
    >
      <ellipse
        cx="12.4997"
        cy="36.2571"
        rx="7.29167"
        ry="1.00714"
        fill={colors.shadow}
      />
      <mask id="path-2-inside-1_136_31754" fill={colors.mask}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.3644 23.8526C20.8875 22.6007 25 17.8075 25 12.0857C25 5.41096 19.4036 0 12.5 0C5.59644 0 0 5.41096 0 12.0857C0 17.8075 4.11251 22.6007 9.63555 23.8526L12.5 34.6458L15.3644 23.8526Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.3644 23.8526C20.8875 22.6007 25 17.8075 25 12.0857C25 5.41096 19.4036 0 12.5 0C5.59644 0 0 5.41096 0 12.0857C0 17.8075 4.11251 22.6007 9.63555 23.8526L12.5 34.6458L15.3644 23.8526Z"
        fill={colors.fill}
      />
      <path
        d="M15.3644 23.8526L14.9223 21.9021L13.7418 22.1697L13.4314 23.3396L15.3644 23.8526ZM9.63555 23.8526L11.5686 23.3396L11.2582 22.1697L10.0777 21.9021L9.63555 23.8526ZM12.5 34.6458L10.5669 35.1588L12.5 42.4425L14.4331 35.1588L12.5 34.6458ZM23 12.0857C23 16.8094 19.598 20.8422 14.9223 21.9021L15.8066 25.8032C22.1769 24.3591 27 18.8056 27 12.0857H23ZM12.5 2C18.3631 2 23 6.57854 23 12.0857H27C27 4.24339 20.4441 -2 12.5 -2V2ZM2 12.0857C2 6.57854 6.63694 2 12.5 2V-2C4.55594 -2 -2 4.24339 -2 12.0857H2ZM10.0777 21.9021C5.40196 20.8422 2 16.8094 2 12.0857H-2C-2 18.8056 2.82306 24.3591 9.1934 25.8032L10.0777 21.9021ZM14.4331 34.1327L11.5686 23.3396L7.70247 24.3657L10.5669 35.1588L14.4331 34.1327ZM13.4314 23.3396L10.5669 34.1327L14.4331 35.1588L17.2975 24.3657L13.4314 23.3396Z"
        fill={colors.border}
        mask="url(#path-2-inside-1_136_31754)"
      />
      <ellipse
        cx="12.4997"
        cy="12.0862"
        rx="4.16667"
        ry="4.02858"
        fill={colors.center}
      />
    </svg>
  );
}