import React from 'react';
import { useState } from 'react';
import env from '../../env.json';

export const Create = () => {
    const [url, setUrl] = useState('');
    const [isError, setIsError] = useState(false);
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('');

    const sendData = obj => {
        setFormClass('hide');
        setLineClass('');
        fetch(env.urlBackend, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(obj),
        })
            .then(response => response.json())
            .then(response => {
                if (response.result) {
                    setUrl(env.url + '/' + response.url);
                    setIsError(false);
                } else {
                    setIsError(true);
                }
            })
            .catch(e => {
                console.log(`Возникла ошибка - ${e}`);
                setIsError(true);
            });
    };

    const loadDataFromForm = e => {
        e.preventDefault();
        let note = e.target.elements.note.value;
        if (note.trim() === '') {
            alert('Заполните поле');
            return false;
        }
        sendData({ note: note });
    };

    if (isError) {
        return (
            <div className="container">
                <div className="row content">
                    <div className="col-12 text">
                    <div className="alert alert-danger" role="alert">
                        <p>Упс, что-то пошло не так =(</p>
                    </div>
                        <div className="text-right">
                                <button
                                    onClick={function () {
                                        window.location.reload();
                                    }}
                                    className="btn btn-info"
                                >
                                    Создать еще один note
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row content">
                <div className="col-12">
                    <div className="text">
                        <form
                            action="react_project/src/components"
                            onSubmit={loadDataFromForm}
                            className={formClass}
                        >
                            <div className="form-group">
                                <label htmlFor="note">Введите заметку</label>
                                <textarea
                                    name="note"
                                    className="form-control"
                                    placeholder="Содержимое заметки"
                                    id="note"
                                />
                                <p>
                                    <b>Внимание!</b> Максимальная длина заметки 1000 символов.
                                </p>
                            </div>
                            <div className="form-group text-right">
                                <button type="submit" className="btn btn-info">
                                    Создать
                                </button>
                            </div>
                        </form>
                        <div className={lineClass}>
                            <div className="alert alert-primary" role="alert">
                                {url}
                            </div>
                            <p>
                                Скопируйте URL и передайте адресату. Внимание! Посмотреть заметку
                                можно один раз!
                            </p>
                            <div className="text-right">
                                <button
                                    onClick={function () {
                                        window.location.reload();
                                    }}
                                    className="btn btn-info"
                                >
                                    Создать еще один note
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
