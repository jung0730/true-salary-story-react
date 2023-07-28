import Button from '../Button'
import Search from './Search'
import Message from './Message'
import Point from './Point'

const NavList = () => {
  return (
    <>
      <div className="relative">
        <Button color="blue-text">
          匿名分享
        </Button>
      </div>
      <Search />
      <Message />
      <Point />
      <Button color="secondary">
        登入
      </Button>
      <Button>
        加薪計畫
      </Button>
    </>
  );
};

export default NavList;