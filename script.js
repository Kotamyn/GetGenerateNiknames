const get_niknames = async () => {
  const data = Array.from(document.querySelectorAll(".has-text-weight-bold.is-size-4.is-size-5-mobile.is-size-3-widescreen"));
  const niknames = data.map(element => element.innerText);
  console.log(niknames);
}
await get_niknames();
