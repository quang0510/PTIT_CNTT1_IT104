//Bài 7
import Header from './Header';
import Menu from './Menu';
import Navbar from './Navbar';
import Cart from './Cart';
import Article from './Article';


export const UserLayout = () => {
  return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Navbar />
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={{ width: '250px', backgroundColor: 'green' , height: "405px" , display: "flex" , justifyContent:"center" , alignItems: "center" }}>
          <Menu />
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between',  }}>
            <Cart />
            <Cart />
            <Cart />
            <Cart />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', }}>
            <Cart />
            <Cart />
            <Cart />
            <Cart />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between',  }}>
            <Cart />
            <Cart />
            <Cart />
            <Cart />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Cart />
            <Cart />
            <Cart />
            <Cart />
          </div>
        </div>

        <div style={{ width: '250px', height:"385px" ,backgroundColor: 'lightblue', padding: '10px' , display: "flex" , justifyContent:"center" , alignItems:"center" }}>
          <Article />
        </div>
      </div>
    </div>
  )
}
export default UserLayout;
