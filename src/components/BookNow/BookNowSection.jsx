import React, { useState } from "react";
import styles from "./BookNowSection.module.css";
import BookingImage from "../../assets/img-main/bookingformhome.jpeg";

export default function BookNowSection() {
  // Datele pentru formular 
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "1",
    room: "",
    name: "",
    email: "",
    phone: "",
  });

  // In array-ul de obiecte se afla optiunile pentru camere
  const roomOptions = [
    { value: "deluxe-king", label: "Deluxe King Garden View" },
    { value: "grand-deluxe", label: "Grand Deluxe Garden View" },
    { value: "junior-pool", label: "Junior Pool Suite" },
    { value: "grand-pool", label: "Grand Pool Suite Seaview" },
    { value: "spa-pool", label: "Spa Pool Suite" },
    { value: "beachfront", label: "Grand Pool Suite Beachfront" },
  ];

  // Functia pentru modificarea datelor
  function handleInputChange(event) {
    // Extrag name si value
    const { name, value } = event.target;
    setFormData({
      // Copiez toate valorile existente din formData, apoi actualizez campul name cu valaorea noua
      ...formData,
      [name]: value,
    });
  }

  // Functia pentru submit a formularului
  function handleSubmit(event) {
    event.preventDefault();
    // Verific daca campurile obligatorii sunt completate
    if (!formData.checkIn || !formData.checkOut || !formData.room) {
      alert("Please fill in all required fields");
      return;
    }
    // Daca campurile sunt completate se afiseaza datele in consola
    console.log("Booking submitted:", formData);
  }

  return (
    <section className={styles.bookingSection}>
      <div className={styles.bookingContent}>
        <div className={styles.bookingFormContainer}>
          <h2 className={styles.sectionTitle}>Reserve Your Stay</h2>
          <p className={styles.sectionSubtitle}>
            Complete the form below to book your perfect room.
          </p>

          {/* La trimiterea datelor, se apeleaza functia handleSubmit */}
          <form className={styles.bookingForm} onSubmit={handleSubmit}>
            {/* Input-ul de check-in */}
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="check-in">Check-In Date *</label>
                <input
                  type="date"
                  id="check-in"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleInputChange}
                  // User-ul nu poate selecta o data din trecut - arata data de astazi
                  min={new Date().toISOString().split("T")[0]}
                  required
                />
              </div>

              {/* Input-ul de check-out */}
              <div className={styles.formGroup}>
                <label htmlFor="check-out">Check-Out Date *</label>
                <input
                  type="date"
                  id="check-out"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleInputChange}
                  min={
                    formData.checkIn || new Date().toISOString().split("T")[0]
                  }
                  required
                />
              </div>
            </div>

            {/* Dropdown cu numarul oaspetilor */}
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="guests">Guests *</label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  required
                >
                  {/* In map se parcurge fiecare numar si returneaza o optiune */}
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {/* Aici se afiseaza textul la singualar sau plural */}
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>

              {/* Optiunile pentru camere */}
              <div className={styles.formGroup}>
                <label htmlFor="room">Room Type *</label>
                <select
                  id="room"
                  name="room"
                  value={formData.room}
                  onChange={handleInputChange}
                  required
                >
                  {/* Valoarea placeholder */}
                  <option value="">Select a room</option>
                  {/* In map se parcurge fiecare camera si returneaza o optiune */}
                  {roomOptions.map((room) => (
                    <option key={room.value} value={room.value}>
                      {/* Numele camerei */}
                      {room.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Input-ul de full name */}
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* Input-ul de email */}
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Input-ul pentru numarul de telefon */}
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Butonul de submit */}
            <div className={styles.formActions}>
              <button type="submit" className={styles.bookNowButton}>
                Confirm Reservation
              </button>
            </div>
          </form>
        </div>


          {/* Imaginea resort-ului */}
        <div className={styles.bookingImageContainer}>
          <img
            src={BookingImage}
            alt="Luxury resort room"
            className={styles.bookingImage}
          />
        </div>
      </div>
    </section>
  );
}
