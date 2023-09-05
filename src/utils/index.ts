type ClassValue = string | string[] | { [key: string]: any } | undefined | null;

function classNames(...args: ClassValue[]): string {
  const classes: string[] = [];

  args.forEach((arg) => {
    if (!arg) return;
    if (typeof arg === "string" || Array.isArray(arg)) {
      classes.push(...(Array.isArray(arg) ? arg : arg.split(" ")));
    } else if (typeof arg === "object") {
      for (const key in arg) {
        if (arg.hasOwnProperty(key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  });

  return classes.join(" ");
}

export default classNames;
