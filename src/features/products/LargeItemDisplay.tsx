import { LargeItemDisplayContainer } from './LargeItemDisplay.styles';

interface Ip {
  children: React.ReactNode;
  gridRow?: string;
  gridColumn?: string;
}

const LargeItemDisplay = ({ children, gridColumn, gridRow }: Ip) => {
  return (
    <LargeItemDisplayContainer gridColumn={gridColumn} gridRow={gridRow}>
      {children}
    </LargeItemDisplayContainer>
  );
};
export default LargeItemDisplay;
