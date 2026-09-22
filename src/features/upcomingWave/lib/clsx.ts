const clsx = (...classNames: Array<string | false | null | undefined>) => classNames.filter(Boolean).join(' ');

export default clsx;
