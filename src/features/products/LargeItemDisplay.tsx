import { LargeItemDisplayContainer } from './LargeItemDisplay.styles';

interface Ip {
  children: React.ReactNode;
}

const LargeItemDisplay = ({ children }: Ip) => {
  return <LargeItemDisplayContainer>{children}</LargeItemDisplayContainer>;
};
export default LargeItemDisplay;
