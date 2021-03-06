import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import Banner from '@/components/home/Banner';
import MainView from '@/components/home/MainView';
import Tags from '@/components/home/Tags';
import styled from '@emotion/styled';
import { useState } from 'react';

const Home = () => {
  const [modal, setModal] = useState(false);
  const handleConfirm = () => {
    setModal(false);
  };
  const handleCancel = () => {
    setModal(false);
  };
  const handleModal = () => {
    setModal(true);
  };
  return (
    <div>
      <Modal
        visible={modal}
        title={'포스트 삭제'}
        message={'정말 삭제하시겠습니까?'}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
      <Button size="small" onClick={handleModal}>
        Test Modal Button
      </Button>
      <Banner />
      <Container>
        <MainView />
        <SidebarWrapper>
          <Sidebar>
            <p>Popular Tags</p>
            <Tags />
          </Sidebar>
        </SidebarWrapper>
      </Container>
    </div>
  );
};

const Container = styled('div')`
  display: flex;
  max-width: 1024px;
  margin: 1.5rem auto 0;
  padding: 0 15px 0 15px;
`;

const SidebarWrapper = styled('div')`
  flex: 0 0 25%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

const Sidebar = styled('div')`
  background: #f3f3f3;
  padding: 5px 10px 10px;
`;

export default Home;
