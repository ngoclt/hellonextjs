import { withRouter } from "next/router";
import MainLayout from "../components/MainLayout.js";

const Content = withRouter(props => (
  <div>
    <h1>{props.router.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
));

const Page = props => (
  <MainLayout>
    <Content />
  </MainLayout>
);

export default Page;
