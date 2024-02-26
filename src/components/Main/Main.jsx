import './Main.scss';
import {models} from '../../assets/models';

export const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="main__inner">
          <div className="main__top">
            <h1 className="main__title">SHALOM SHOP</h1>
            <p className="main__text">
              SHALOM SHOP- інтернет-магазин, де ви можете підібрати годинники, які будуть підкреслювати вашу індивідуальність та аксесуари під них
            </p>
          </div>
          <div className="main__bottom">
            <div className="main__cards">
              {models.map(m => (
                <div className="main__card" key={m.id}>
                  <div className="main__card--top">
                    <img src={m.img} alt={m.name} className="main__card--img" />
                  </div>
                  <h3 className="main__card--title">{m.name} - <b>{m.price}</b></h3>
                  <div className="main__card--bottom">
                    <span className="main__card--bottom-item">Дисплей:{m.display}</span>
                    <span className="main__card--bottom-item">Росширення:{m.resolution}</span>
                    <span className="main__card--bottom-item">Ємність батареї:{m.battery} А.г</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}