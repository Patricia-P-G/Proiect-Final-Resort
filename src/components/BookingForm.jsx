import React, { useState } from "react";
import styles from "./BookingForm.module.css";
import BookingImage from "../assets/img-main/bookingformhome.jpeg";

export default function BookingSection() {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "1",
    room: "",
  });

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

  // In array se afla optiunile pentru camere
  const roomOptions = [
    { value: "deluxe-king", label: "Deluxe King Garden View" },
    { value: "grand-deluxe", label: "Grand Deluxe Garden View" },
    { value: "junior-pool", label: "Junior Pool Suite" },
    { value: "grand-pool", label: "Grand Pool Suite Seaview" },
    { value: "spa-pool", label: "Spa Pool Suite" },
    { value: "beachfront", label: "Grand Pool Suite Beachfront" },
  ];

  return (
    <section className={styles.bookingSection}>
      <div className={styles.bookingContent}>
        <div className={styles.bookingFormContainer}>
          <h1 className={styles.bookingTitle}>Book A Room</h1>


          <form className={styles.bookingForm} onSubmit={handleSubmit}>
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
           
            {/* Butonul de submit */}
            <div className={styles.formActions}>
              <button type="submit" className={styles.bookNowButton}>
                Book Now
              </button>
            </div>
          </form>
        </div>

        {/* Imaginea resort-ului */}
        <div className={styles.bookingImageContainer}>
          <img
            src={BookingImage}
            alt="Booking"
            className={styles.bookingImage}
          />
        </div>
      </div>
    </section>
  );
}
