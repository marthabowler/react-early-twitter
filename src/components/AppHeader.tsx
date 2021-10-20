import NavItem from "./NavItem";
import ArrowElement from "./ArrowElement";

function AppHeader(): JSX.Element {
  return (
    <header>
      <h2>twitter</h2>
      <nav>
        <NavItem label={"updates"} />
        <ArrowElement />
        <NavItem label={"archive"} />
        <ArrowElement />
        <NavItem label={"preferences"} />
        <ArrowElement />
        <NavItem label={"help"} />
        <ArrowElement />
        <NavItem label={"sign-out"} />
      </nav>
    </header>
  );
}

export default AppHeader;
