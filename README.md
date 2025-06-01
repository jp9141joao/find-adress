# **Find Address**

A simple and efficient project that automatically retrieves the full address from a ZIP code (CEP) using the ViaCEP API. When a valid CEP is entered, the system automatically fills in the fields for street, neighborhood, city, state, and area code (DDD).

---

## **🚀 Features**

* **🔎 Address Lookup:** Enter a CEP and automatically get the corresponding address information.
* **📄 Automatic Filling:** Street, neighborhood, city, state, and DDD are filled in with data returned by the API.
* **⚠️ Validation:** If the CEP is invalid or does not exist, the fields will not be filled.

---

## **💡 How It Works**

1. The user enters a valid CEP.
2. The system makes a request to the ViaCEP API.
3. The API response is processed and the form fields are filled automatically.
4. In case of an error or non-existent CEP, the system does not change the fields and may show a warning message.

---

## **📌 Example Usage**

1. Enter a CEP, for example: `01001000`.
2. The system automatically fills the following fields:

   * **Street:** Praça da Sé
   * **Neighborhood:** Sé
   * **City:** São Paulo
   * **State:** SP
   * **DDD (Area Code):** 11

---

## **🛠️ Technologies Used**

* **HTML:** Page structure.
* **CSS:** Interface styling (optional, depending on your project).
* **JavaScript:** Logic handling and API integration.
* **ViaCEP API:** Free service for address lookup via CEP.

---

## **▶️ How to Run**

1. Clone or download this repository.
2. Open the `index.html` file directly in your browser.
3. Enter a CEP in the search field.
4. See the address information auto-filled.

---
