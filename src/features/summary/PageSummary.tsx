import { PageSummaryContainer, PageSummaryTitle } from './PageSummary.styled';

export interface IpageSummary {
  gridColumn?: string;
  gridRow?: string;
}
const PageSummary = ({ gridColumn, gridRow }: IpageSummary) => {
  return (
    <PageSummaryContainer gridColumn={gridColumn} gridRow={gridRow}>
      <PageSummaryTitle>
        Get yourself and your loved ones the best gift at Nxt products
      </PageSummaryTitle>
      <p>
        At next store, we pride ourselfs in the ability to offer you the best
        value in our products. All of our products have been carefully selected
        to suit and impress every one of our customers
      </p>
    </PageSummaryContainer>
  );
};
export default PageSummary;
