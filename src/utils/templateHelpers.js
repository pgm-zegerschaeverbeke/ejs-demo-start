const helpers = {
  uppie: (str) => str.toUpperCase(),
  lowie: (str) => str.toLowerCase(),
  capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),
  truncate: (str, length) =>
    str.length > length ? str.slice(0, length) + "..." : str,
  highlight: function (inp) {
    return `<span style="background-color: yellow;">
      ${inp}
    </span>`;
  },
};

export default helpers;
