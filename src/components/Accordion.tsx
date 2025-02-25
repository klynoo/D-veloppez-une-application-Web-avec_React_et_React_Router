import { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";

const Accordion = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode | string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else if (contentRef.current) {
      contentRef.current.style.maxHeight = "0";
    }
  }, [isOpen]);

  return (
    <Container>
      <AccordionTitle onClick={toggleAccordion}>
        {title}
        <Icon $isOpen={isOpen} className="fa-solid fa-chevron-up" />
      </AccordionTitle>
      <AccordionContent ref={contentRef} $isOpen={isOpen}>
        <AccordionItem>{children}</AccordionItem>
      </AccordionContent>
    </Container>
  );
};

export default Accordion;

const Container = styled.div`
  width: 100%;
  margin: 10px 0;
  border-radius: 5px;
`;

const AccordionTitle = styled.h2`
  background-color: rgba(255, 96, 96, 1);
  border-radius: 5px;
  cursor: pointer;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 142.6%; /* 34.224px */
  height: 50px;

  @media (max-width: 700px) {
    height: 32px;
    font-size: 13px;
  }
`;

const Icon = styled.i<{ $isOpen: boolean }>`
  transition: transform 0.3s ease-in-out;
  ${({ $isOpen }) =>
    $isOpen &&
    css`
      transform: rotate(-180deg);
    `}
`;

const AccordionContent = styled.div<{ $isOpen: boolean }>`
  margin-top: -1px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  max-height: ${({ $isOpen }) => ($isOpen ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-out;
`;

const AccordionItem = styled.div`
  border-radius: 0px 0px 5px 5px;
  background: rgba(246, 246, 246, 0.45);
  padding: 10px 10px 10px 10px;
  color: #000;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 142.6%; /* 25.668px */
`;
