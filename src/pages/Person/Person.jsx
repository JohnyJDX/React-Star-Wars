import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import PersonFilms from '../../components/PersonFilms/PersonFilms';
import PersonInfo from '../../components/PersonInfo/PersonInfo';
import PersonLinkBack from '../../components/PersonLinkBack/PersonLinkBack';
import PersonPhoto from '../../components/PersonPhoto/PersonPhoto';
import UiLoad from '../../components/UI/UILoad/UILoad';
import { API_PERSON } from '../../constants/api';
import { getApi } from '../../utils/network';
import s from './Person.module.css';

const Person = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [isErrorApi, setIsErrorApi] = useState(false);
	const [personInfo, setPersonInfo] = useState([]);
	const [personName, setPersonName] = useState('');
	const [personFilms, setPersonFilms] = useState([]);

	let { id } = useParams();

	const getPeopleData = async url => {
		try {
			const people = await getApi(url);

			if (people) {
				setIsErrorApi(false);
				setPersonInfo([
					{ title: 'Height', data: people.height },
					{ title: 'Mass', data: people.mass },
					{ title: 'Hair Color', data: people.hair_color },
					{ title: 'Skin Color', data: people.skin_color },
					{ title: 'Eye Color', data: people.eye_color },
					{ title: 'Birth year', data: people.birth_year },
					{ title: 'Gender', data: people.gender },
				]);
				setPersonName(people.name);

				if (people.films.length) {
					setPersonFilms(people.films);
				}
			} else {
				setIsErrorApi(true);
			}
		} catch (error) {
			setIsErrorApi(true);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getPeopleData(API_PERSON + id);
	}, [id]);

	return (
		<div className={s.wrapper}>
			{isLoading ? (
				<UiLoad />
			) : !isErrorApi ? (
				<>
					<PersonLinkBack />
					<h1 className={s.name}>{personName}</h1>
					<div className={s.info}>
						<PersonPhoto personName={personName} id={id} />
						<PersonInfo personInfo={personInfo} />
						<PersonFilms personFilms={personFilms} />
					</div>
				</>
			) : (
				<ErrorMessage />
			)}
		</div>
	);
};

export default Person;
