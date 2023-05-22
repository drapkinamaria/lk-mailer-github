import React from 'react';
import Header from '../Components/Header'
import NavBar from "../Components/NavBar"
import Footer from '../Components/Footer'

export default function CreateNotification() {
    return (
        <div>
            <Header/>
            <NavBar/>
            <main className="main_part">
                <div className="block_main_part">
                    <div className="path_page">
                        <div className="main_path_text main_first_color">Главная/</div>
                        <div className="main_path_text main_second_color">Корпоративные сервисы/Создать уведомление</div>
                    </div>
                    <div className="name_notification blue">Создать уведомление</div>
                </div>
                <div className="block_main_part">
                    <div>
                        <div className="blue_header">Тип доставки</div>
                        <div className="flex_property">
                            <input type="checkbox" value="телеграм"/><label>телеграм</label>
                            <input type="checkbox" value="почта"/><label>почта</label>
                            <input type="checkbox" value="оповещение"/><label>оповещение в ЛК</label>
                        </div>
                    </div>
                    <div>
                        <div className="blue_header">Кому</div>
                        <div className="flex_property gap">
                            <div className="block_four_elements">
                                <div className="black_small_header">Вид трудоустройства</div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                            <div className="block_four_elements">
                                <div className="black_small_header">Категория</div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                            <div className="block_four_elements">
                                <div className="black_small_header">Подразделение</div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                            <div className="block_four_elements">
                                <div className="black_small_header">Должность</div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                            <div className="block_four_elements">
                                <div className="black_small_header">Ученая степень</div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                            <div className="block_four_elements">
                                <div className="black_small_header">Ученое звание</div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                            <div className="block_four_elements">
                                <div className="black_small_header">Пол</div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                            <div className="block_four_elements">
                                <div className="black_small_header">Год рождения</div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="blue_header_container">
                            <div className="blue_header">Контент</div>
                        </div>
                        <div className="content_header">
                            <div className="square-container">
                                <div className="square-block">
                                    <button className="left_square">
                                        <img src = "" alt="My Happy SVG"/>
                                    </button>
                                    <button className="right_square">
                                        <span className="picture_settings arrow_forward"></span>
                                    </button>
                                </div>
                                <div className="square-block">
                                    <button className="left_square">
                                        <span className="picture_settings bold"></span>
                                    </button>
                                    <button className="without_borders_square">
                                        <span className="picture_settings italic"></span>
                                    </button>
                                    <button className="ordinary_square">
                                        <span className="picture_settings underline"></span>
                                    </button>
                                    <button className="right_square">
                                        <span className="new_picture_settings rubber"></span>
                                    </button>
                                </div>
                                <div className="square-block">
                                    <button className="left_square">
                                        <span className="new_picture_settings left hamburger"></span>
                                    </button>
                                    <button className="right_square">
                                        <span className="picture_settings numbered_list"></span>
                                    </button>
                                </div>
                                <div className="square-block">
                                    <button className="left_square">
                                        <span className="picture_settings link"></span>
                                    </button>
                                    <button className="right_square">
                                        <span className="second_picture_settings picture"></span>
                                    </button>
                                </div>
                                <div className="square-block">
                                    <button className="square">
                                        <span className="second_picture_settings code"></span>
                                    </button>
                                </div>
                                                            </div>
                        </div>
                        <div className="content_bottom"></div>
                    </div>
                    <div>
                        <button className="button blue-background button_text">Применить фильтры</button>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
