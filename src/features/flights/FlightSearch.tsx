import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from './FlightSearch.module.css';

const FlightSearchSchema = Yup.object().shape({
  origin: Yup.string().required('Required'),
  destination: Yup.string().required('Required'),
  departureDate: Yup.date().required('Required'),
  returnDate: Yup.date()
    .min(
      Yup.ref('departureDate'),
      'Return date must be after departure'
    ),
  travelers: Yup.number().min(1).max(10),
  cabinClass: Yup.string().oneOf(['economy', 'premium', 'business', 'first'])
});

export default function FlightSearch() {
  return (
    <section className={styles.flightSearch}>
      <div className={styles.container}>
        <div className={styles.searchTabs}>
          <button className={styles.active}>Flights</button>
          <button>Hotels</button>
          <button>Cars</button>
        </div>
        <Formik
          initialValues={{
            origin: '',
            destination: '',
            departureDate: '',
            returnDate: '',
            travelers: 1,
            cabinClass: 'economy'
          }}
          validationSchema={FlightSearchSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="origin">From</label>
                  <Field name="origin" as="select" className={styles.select}>
                    <option value="">Select origin</option>
                    <option value="DXB">Dubai (DXB)</option>
                    <option value="LHR">London (LHR)</option>
                    <option value="JFK">New York (JFK)</option>
                  </Field>
                  {errors.origin && touched.origin && (
                    <div className={styles.error}>{errors.origin}</div>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="destination">To</label>
                  <Field name="destination" as="select" className={styles.select}>
                    <option value="">Select destination</option>
                    <option value="DXB">Dubai (DXB)</option>
                    <option value="LHR">London (LHR)</option>
                    <option value="JFK">New York (JFK)</option>
                  </Field>
                  {errors.destination && touched.destination && (
                    <div className={styles.error}>{errors.destination}</div>
                  )}
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="departureDate">Depart</label>
                  <Field 
                    name="departureDate" 
                    type="date" 
                    className={styles.input}
                  />
                  {errors.departureDate && touched.departureDate && (
                    <div className={styles.error}>{errors.departureDate}</div>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="returnDate">Return</label>
                  <Field 
                    name="returnDate" 
                    type="date" 
                    className={styles.input}
                  />
                  {errors.returnDate && touched.returnDate && (
                    <div className={styles.error}>{errors.returnDate}</div>
                  )}
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="travelers">Travelers</label>
                  <Field 
                    name="travelers" 
                    type="number" 
                    min="1" 
                    max="10"
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="cabinClass">Class</label>
                  <Field name="cabinClass" as="select" className={styles.select}>
                    <option value="economy">Economy</option>
                    <option value="premium">Premium Economy</option>
                    <option value="business">Business Class</option>
                    <option value="first">First Class</option>
                  </Field>
                </div>
              </div>

              <button type="submit" className={styles.submitButton}>
                <i className="fas fa-search"></i> Search Flights
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}