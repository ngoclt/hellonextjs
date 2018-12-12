import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const MainLayout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    <style jsx global>{`
      h1,
      a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }
    `}</style>
  </div>
);

export default MainLayout;
