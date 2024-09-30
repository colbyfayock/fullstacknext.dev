import Container from "@/components/Container";

const Header = () => {
  return (
    <header className="mt-8 mb-12">
      <Container>
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <p className="font-bold">
              Full Stack Next.js
            </p>
          </div>
          <div>
            <ul>
              <li>
                <a href="https://youtube.com/colbyfayock" className="hover:text-blue-500">
                  Watch on YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
