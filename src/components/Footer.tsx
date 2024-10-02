import Container from "@/components/Container";

const Footer = () => {
  return (
    <footer className="mt-12 mb-8">
      <Container className="flex justify-between gap-4">
        <p className="text-sm">
          fullstacknext.dev &copy; {new Date().getFullYear()}
        </p>
        <p className="text-sm">
          Created by <a className="hover:text-blue-600" href="https://twitter.com/colbyfayock">Colby Fayock</a> with Next.js, <a className="hover:text-blue-600" href="https://spacejelly.dev/xata">Xata</a>, and <a className="hover:text-blue-600" href="https://spacejelly.dev/clerk">Clerk</a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
