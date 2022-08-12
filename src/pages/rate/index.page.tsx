import { Button } from '@components';
import { Routes } from '@constants/Routes';
import { useRouter } from 'next/router';

const IndexPage = () => {
  const { push } = useRouter();
  const { NewRate, EditRate } = Routes;
  const onNewRateClick = () => {
    push(NewRate);
  };

  const onEditRateClick = () => {
    push({
      pathname: EditRate,
      query: { rateId: 'edit' },
    });
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2> Страница в разработке </h2>
      <Button style={{ width: '250px', margin: '20px' }} onClick={onNewRateClick}>
        новый
      </Button>
      <Button style={{ width: '250px' }} onClick={onEditRateClick}>
        изменить
      </Button>
    </div>
  );
};

export default IndexPage;
