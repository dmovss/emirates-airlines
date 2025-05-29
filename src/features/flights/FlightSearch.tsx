import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useAppDispatch } from '../../app/hooks'
import { searchFlights } from './flightsSlice'
import styles from './FlightSearch.module.css'

const FlightSearchSchema = Yup.object().shape({
  origin: Yup.string().required('Required'),
  destination: Yup.string().required('Required'),
  departureDate: Yup.date().required('Required'),
  returnDate: Yup.date().min(
    Yup.ref('departureDate'),
    'Return date must be after departure'
  ),
  travelers: Yup.number().min(1).max(10),
  cabinClass: Yup.string().oneOf(['economy', 'premium', 'business', 'first']),
})

export default function FlightSearch() {
  const dispatch = useAppDispatch()

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          origin: '',
          destination: '',
          departureDate: '',
          returnDate: '',
          travelers: 1,
          cabinClass: 'economy',
        }}
        validationSchema={FlightSearchSchema}
        onSubmit={(values) => {
          dispatch(searchFlights(values))
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="origin">From</label>
              <Field
                name="origin"
                as="select"
                className={styles.select}
              >
                <option value="">Select origin</option>
                {/* Populate with actual airports */}
              </Field>
              {errors.origin && touched.origin && (
                <div className={styles.error}>{errors.origin}</div>
              )}
            </div>

            {/* Other form fields */}

            <button type="submit" className={styles.submitButton}>
              Search Flights
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}