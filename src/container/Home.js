import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, ErrorMessage } from "formik";

import Card from "../component/UI/Card/Card";
import CardBody from "../component/UI/Card/CardBody";
import { PollutionAction } from "../core/entities/pollution/action";
import groupDataItem from "../utils/groupDataItem";
import BarChart from "../component/UI/Chart/BarChart";
import TextInput from "../component/Form/TextInput";
import TextError from "./TextError";
import * as Yup from "yup";

const Home = () => {
	const dispatch = useDispatch();
	const formikRef = useRef();

	const countries = useSelector((state) => state.pollution.country.results);
	const cities = useSelector((state) => state.pollution.city.results);
	const measurements = useSelector(
		(state) => state.pollution.measurement.results,
	);

	const [parameters, setParameters] = useState([]);
	const [pollutionData, setPollutionData] = useState([]);
	const [pollutionValue, setPollutionValue] = useState([]);
	const [pollutionDate, setPollutionDate] = useState([]);

	useEffect(() => {
		dispatch(PollutionAction.getCountry());
	}, []);

	useEffect(() => {
		const unique = [...new Set(measurements.map((item) => item.parameter))];
		setParameters(unique);
	}, [dispatch, measurements]);

	const getCities = (e) => {
		dispatch(PollutionAction.getCity(e.target.value));
	};

	const handleSubmit = (values) => {
		dispatch(PollutionAction.getMeasurement(values));
	};

	const showBar = async (e) => {
		let dates = [],
			values = [];
		const parameterName = e.target.innerText;
		var groupedData = groupDataItem(measurements, "parameter");
		await setPollutionData(groupedData[parameterName]);

		for (const pollutionDataItem of pollutionData) {
			dates.push(pollutionDataItem.date.local);
			values.push(pollutionDataItem.value);
		}

		setPollutionDate(dates);
		setPollutionValue(values);
	};

	const initialValues = {
		country: "",
		city: "",
		date_from: "",
		date_to: "",
	};

	const validationSchema = Yup.object({
		country: Yup.string().required("Choose a country"),
		city: Yup.string().required("Choose a city"),
		date_from: Yup.date().required("Choose a From date"),
		date_to: Yup.date().required("Choose a To date"),
	});

	const handleReset = () => {
		formikRef.current.resetForm();
	}
	return (
		<div style={{ marginTop: "2%" }}>
			<Card styleClasses='card custom-card border mb-lg-0'>
				<CardBody>
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						innerRef={formikRef}
						onSubmit={(values, { setSubmitting }) => {
							handleSubmit(values, { setSubmitting });
						}}>
						{({
							values,
							handleChange,
							handleBlur,
							handleSubmit,
							resetForm
						}) => (
							<form onSubmit={handleSubmit}>
								<div class='row'>
									<div class='col'>
										<select
											class='form-select'
											name={"country"}
											value={values.country}
											onBlur={handleBlur}
											onChange={(e) => {
												getCities(e);
												handleChange(e);
											}}>
											<option selected>Country</option>
											{countries.map((d) => (
												<option value={d.code}>{d.name}</option>
											))}
										</select>
										<ErrorMessage
											className='error-message'
											name='country'
											component={TextError}
										/>
									</div>
									<div class='col'>
										<select
											class='form-select'
											name={"city"}
											value={values.city}
											onChange={handleChange}
											onBlur={handleBlur}>
											<option selected>City</option>
											{cities.length > 0
												? cities.map((d) => (
													<option value={d.city}>{d.city}</option>
												))
												: null}
										</select>
										<ErrorMessage
											className='error-message'
											name='city'
											component={TextError}
										/>
									</div>
								</div>
								<div className='row' style={{ marginTop: "15px" }}>
									<div class='col'>
										<TextInput
											type='date'
											name='date_from'
											value={values.date_from}
											onChange={handleChange}
											onBlur={handleBlur}
										/>
										<ErrorMessage
											className='error-message'
											name='date_from'
											component={TextError}
										/>
									</div>
									<div class='col'>
										<TextInput
											type='date'
											name='date_to'
											value={values.date_to}
											onChange={handleChange}
											onBlur={handleBlur}
										/>
										<ErrorMessage
											className='error-message'
											name='date_to'
											component={TextError}
										/>
									</div>
								</div>
								<div className='row' style={{ marginTop: "15px" }}>
									<div class='col'>
										<button
											className="btn btn-outline btn-lg"
											type='submit'
											style={{ backgroundColor: "#563d7c", color: "white", }}>
											View
										</button>
										<button
											className="btn btn-outline-secondary"
											type='submit'
											style={{ marginLeft: "2%" }}
											onClick={() => {
												resetForm();
												handleReset();
											}}>
											Reset
										</button>
									</div>
								</div>
							</form>
						)}
					</Formik>
				</CardBody>
			</Card>
			<div class='d-flex flex-row bd-highlight mb-3 mt-3'>
				{parameters.map((p) => (
					<button
						class='btn btn-outline-light m-2'
						style={{ backgroundColor: "#563d7c" }}
						onClick={showBar}>
						{p}
					</button>
				))}
			</div>

			{pollutionDate.length > 0 && pollutionValue.length > 0 && (
				<BarChart labels={pollutionDate} datasets={pollutionValue} />
			)}
		</div>
	);
};

export default Home;
