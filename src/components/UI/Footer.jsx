const Footer = () => {
    return (
        <>
            <div className="container">
                <footer className="py-5">
                    <div className="row">
                        <div className="col-6 col-md-3 mb-3">
                            <ul className="nav flex-column text-nowrap">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Мобильные приложения</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Помощь и Обратная связь</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Платные услуги</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">OLX PRO</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Бизнес на OLX</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Для прессы</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Реклама на сайте</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Блог OLX</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Условия использования</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Политика конфиденциальности</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-3 mb-3">
                            <ul className="nav flex-column text-nowrap">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Как продавать и покупать?</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Правила безопасности</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Карта сайта</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Карта регионов</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">OLX delivery</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Популярные запросы</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Работа в OLX</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">OLX Доставка: правила и акции</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>© 2022 Company, Inc. All rights reserved.</p>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3"><a className="link-dark" href="#">
                                <svg className="bi" width="24" height="24">
                                    <use xlinkHref="#twitter"></use>
                                </svg>
                            </a></li>
                            <li className="ms-3"><a className="link-dark" href="#">
                                <svg className="bi" width="24" height="24">
                                    <use xlinkHref="#instagram"></use>
                                </svg>
                            </a></li>
                            <li className="ms-3"><a className="link-dark" href="#">
                                <svg className="bi" width="24" height="24">
                                    <use xlinkHref="#facebook"></use>
                                </svg>
                            </a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Footer;