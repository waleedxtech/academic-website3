
import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'resistance-butt-welding',
    title: 'Design and Development of Resistance Butt Welding Machine',
    shortDescription: 'Designed a high-current transformer, validated through simulations and Finite Element Analysis (FEA), developed mechanical components, and built a functional hardware prototype.',
    longDescription: `The Resistance Butt Welding Machine was designed as a simplified and cost-effective solution tailored for local bulk production in cost-sensitive manufacturing environments. The aim was to introduce an economical alternative to complex commercial welding systems without compromising core functionality.

To ensure relevance and practicality, market research and an extensive literature review were conducted. This analysis helped identify the limitations of existing solutions, such as high cost, complexity, and limited adaptability for local manufacturing needs. Based on these insights, a new design approach was formulated that prioritized efficiency, affordability, and ease of fabrication.

At the heart of the system is a high-current transformer, which was custom-designed to deliver the required welding current. Its performance was validated through computer-based simulations and Finite Element Analysis (FEA), ensuring thermal and magnetic stability under operational conditions. The transformer was engineered to be compact yet powerful enough to support the resistance welding process reliably.

In addition to the electrical design, the mechanical structure of the machine was developed from the ground up. This included designing the frame, electrode holders, and the actuation mechanism necessary for the welding operation. Emphasis was placed on structural integrity and operational repeatability to ensure consistent weld quality across multiple uses.

A functional prototype of the complete system was fabricated and tested, successfully demonstrating its capability to perform resistance butt welding operations. The project not only showcased the technical feasibility of a low-cost welding solution but also provided hands-on experience in transformer design, mechanical engineering, and practical system integration. The resulting machine serves as a viable option for small-scale industries and local manufacturers seeking affordable welding equipment for mass production.`,
    imageUrls: [],
    imageHints: ['welding machine industrial'],
    technologies: ['FEA (ANSYS Maxwell)', 'Transformer Design', 'Mechanical Design', 'Prototyping', 'Circuit Simulation'],
  },
  {
    slug: 'solid-state-dc-breaker',
    title: 'Design and Development of Solid-state DC Circuit Breaker',
    shortDescription: 'Designed and developed a fast, low-loss solid-state DC circuit breaker with reclosing and rebreaking capabilities, validated through simulations and hardware testing.',
    longDescription: [
      'Developed a fast, low-loss solid-state DC circuit breaker with quick reclosing and rebreaking capabilities.',
      'Achieves low conduction loss and fast fault interruption using solid-state components.',
      'Operating modes and breaker characteristics are validated through detailed Simulink/MATLAB simulations.',
      'Hardware implementation of the circuit breaker has been successfully carried out.',
      'The breaker not only interrupts fault current but also recharges the commutation capacitor to enable rebreaking.',
      'Demonstrates rebreaking capability not available in existing DC circuit breakers.',
    ],
    imageUrls: ['https://res.cloudinary.com/dcajabot9/image/upload/v1750576112/Project_11_SSDCCB_fieuiy.jpg'],
    imageHints: ['circuit breaker diagram'],
    technologies: ['Simulink/MATLAB', 'Power Electronics', 'Circuit Design', 'Fault Interruption', 'Control Systems'],
  },
  {
    slug: 'smart-grid-load-forecasting',
    title: 'Smart Grid Load Forecasting using Machine Learning',
    shortDescription: 'Developed a machine learning model to forecast electricity load in the Netherlands using 6 years of real-world data. The project involved preprocessing, feature engineering, and building models from a Linear Regression baseline to an optimized XGBoost model. The final model significantly improved accuracy with R² = 0.9818, MAE = 178.36 MW, and RMSE = 262.63 MW, representing ~47% MAE and ~43% RMSE improvements..',
    longDescription: [
      'Developed a machine learning model to predict future electricity load for the Netherlands in a smart grid context',
      'Utilized ENTSO-E dataset with 201,604 entries at 15-minute intervals (2014–2020), including load, solar, and wind generation data',
      'Preprocessed data with timestamp conversion, chronological indexing, and time-based interpolation to handle missing values',
      'Engineered temporal features (hour, day, month, year, holidays, weekends), synthetic temperature features, and lagged load/temperature features for time-series forecasting',
      'Baseline Model: Linear Regression achieved R² = 0.9447, MAE = 334.71 MW, RMSE = 457.78 MW',
      'Advanced Model: XGBoost achieved R² = 0.9818, MAE = 178.36 MW, RMSE = 262.63 MW, improving accuracy by ~47% (MAE) and ~43% (RMSE) over baseline',
      'Feature importance analysis highlighted lagged load values, holidays, and cyclical time features as key drivers of electricity demand',
      'Demonstrated the effectiveness of feature engineering and non-linear models in capturing complex load patterns',
      'Gained hands-on ML experience with complete machine learning pipeline: data preprocessing, feature engineering, baseline model selection, metric evaluation, advanced model experimentation, iterative evaluation, overfitting/underfitting handling',
      'Lagged load values, holidays, and cyclical time features significantly influence electricity demand',
      'Feature engineering plays a critical role in improving predictive accuracy for time-series data',
      'Non-linear models like XGBoost outperform traditional linear regression in capturing complex load patterns',
      'External real-world factors (e.g., temperature, holidays) must be considered for robust smart grid forecasting',
      'Data preprocessing and handling missing values are essential for reliable machine learning models'
    ],
    imageUrls: [
      'https://res.cloudinary.com/dcajabot9/image/upload/v1756938923/5_ddih65.png',
      'https://res.cloudinary.com/dcajabot9/image/upload/v1756938924/4_yjtd2n.png',
      'https://res.cloudinary.com/dcajabot9/image/upload/v1756938923/1_gcsesd.png',
      'https://res.cloudinary.com/dcajabot9/image/upload/v1756938923/2_ewhv2i.png'
    ],
    imageHints: [
      'load forecast graph',
      'feature importance chart',
      'predicted vs actual load',
      'time-series feature visualization',
      'model performance metrics'
    ],
    technologies: [
      'Python',
      'scikit-learn',
      'pandas',
      'matplotlib',
      'Machine Learning'
    ]
},

  {
    slug: 'dc-ac-inverter',
    title: 'DC to AC Converter (Inverter)',
    shortDescription: 'Designed a MOSFET-based H-bridge inverter with variable frequency output, simulated in MATLAB/Proteus, and implemented on a custom PCB with Arduino control.',
    longDescription: [
      'Designed a MOSFET-based full H-bridge inverter with variable frequency output (10 Hz to 100 kHz).',
      'Developed gate drive circuits and generated gate pulses using an Arduino Nano microcontroller.',
      'Simulated the inverter circuit using MATLAB and Proteus.',
      'Designed and fabricated the PCB, followed by successful hardware implementation.'
    ],
    imageUrls: ['https://res.cloudinary.com/dcajabot9/image/upload/v1750576117/Project_9_Inverter_al7gus.jpg'],
    imageHints: ['inverter circuit pcb'],
    technologies: ['Power Electronics', 'Inverter Design', 'MATLAB', 'Proteus', 'Arduino', 'PCB Design', 'Circuit Implementation'],
  },
  {
    slug: 'magnetic-levitation-system',
    title: 'Magnetic Levitation System',
    shortDescription: 'Developed an analog PID controller circuit and levitation system, and successfully achieved stable levitation of a metallic object.',
    longDescription: 'This project involved the development of a magnetic levitation system regulated by an analog PID controller. The control strategy was implemented entirely using discrete analog components, emphasizing practical realization of continuous-time control principles. The system maintained stable levitation of a metallic object by dynamically adjusting the electromagnetic force in response to position feedback. Precise tuning of proportional, integral, and derivative elements was essential to ensure a fast, stable response with minimal oscillations. The successful operation of the system validated the effectiveness of analog PID control in managing nonlinear physical systems and highlighted its relevance for applications requiring real-time analog signal processing.',
    imageUrls: ['https://res.cloudinary.com/dcajabot9/image/upload/v1750576105/Project_8_maglev_jymw0f.jpg'],
    imageHints: ['levitating object magnet'],
    technologies: ['Analog PID Control', 'Control Systems', 'Electromagnetism', 'Circuit Design', 'Sensors'],
  },
  {
    slug: 'line-following-robot',
    title: 'Line Following Robot Using STM32F1 Microcontroller',
    shortDescription: 'A line-following robot using STM32F1 and IR sensors autonomously tracked a path with real-time control, motor drivers, and a regulated power supply.',
    longDescription: `A line-following robot utilizing the STM32F1 microcontroller. The robot was designed to detect and follow a black line path using infrared sensors and respond in real-time through a programmed control algorithm.

The robot’s hardware setup included IR sensors for line detection, motor drivers for movement, and a regulated power supply for reliable operation. The STM32F1 processed sensor data to determine directional movement and adjusted the motors accordingly to maintain alignment with the line.

Hands-on experience with core embedded system skills including sensor interfacing, real-time algorithm development, and motor control. It also provided practical experience in autonomous robotics and STM32 microcontroller programming.`,
    imageUrls: ['https://res.cloudinary.com/dcajabot9/image/upload/v1750576097/Project_6_LFR_lqrfa0.jpg'],
    technologies: [
        'STM32F1 Microcontroller',
        'Embedded C Programming',
        'Infrared (IR) Sensors',
        'Motor Driver Circuits',
        'Real-Time Control Algorithms',
        'Power Electronics (Regulated Power Supply)',
        'Autonomous Robotics',
        'Sensor Interfacing',
        'Motor Control Systems'
    ],
},

  {
    slug: 'home-automation-stm32',
    title: 'Home Automation using STM32F1 Microcontroller',
    shortDescription: 'Developed a home automation system using STM32F1 microcontroller and Android phone. Enabled wireless control of home appliances via mobile interface.',
    longDescription: `This project demonstrates a basic home automation system using the STM32F1 microcontroller and an Android mobile application. The goal was to enable wireless control of home appliances to enhance convenience and accessibility.

A Bluetooth module was interfaced with the STM32F1, allowing communication between the mobile phone and the microcontroller. Through a custom-built Android app, users could send commands to switch devices on or off in real time. The STM32 received and processed these commands to control relays connected to various electrical loads.

This project showcases fundamental concepts of IoT, embedded systems, and human-machine interaction. It provided hands-on experience with microcontroller programming, wireless communication, and system integration for smart home applications.`,
    imageUrls: [],
    imageHints: ['home automation app'],
    technologies: ['STM32', 'Embedded Systems', 'Android Development', 'Bluetooth', 'IoT'],
  },

  

  {
    slug: 'bfsk-bpsk-modulator',
    title: 'BFSK and BPSK Modulator',
    shortDescription: 'Implemented BFSK and BPSK digital modulators to represent binary data using frequency and phase shifts, respectively. Demonstrated their characteristics and applications in communication systems.',
    longDescription: `This project focused on the implementation and analysis of two fundamental digital modulation schemes: Binary Frequency Shift Keying (BFSK) and Binary Phase Shift Keying (BPSK).

BFSK represents binary data by shifting between two distinct frequencies. A higher frequency corresponds to binary 1, while a lower frequency represents binary 0. This modulation technique is relatively simple, robust against noise, and is frequently used in low-data-rate communication applications such as remote controls and paging systems.

In contrast, BPSK represents binary data by changing the phase of a carrier signal. A 0-degree phase represents a binary 1, and a 180-degree phase represents a binary 0. BPSK provides better spectral efficiency and improved resistance to noise compared to BFSK, making it suitable for high-reliability systems such as wireless and satellite communications.

This project involved designing, simulating, and analyzing both modulators to understand their operational principles, strengths, and application scenarios in digital communication.`,
    imageUrls: [],
    technologies: ['Digital Modulation', 'Communication Systems', 'Signal Processing', 'BFSK', 'BPSK'],
  },
  {
    slug: 'bus-reservation-system',
    title: 'Bus Reservation System using C++',
    shortDescription: 'A Bus Reservation System to simulate a bus ticketing system. Features include seat booking, ticket cancellation, route management, and passenger data handling using national identity number.',
    longDescription: 'A Bus Reservation System to simulate a bus ticketing system. Features include seat booking, ticket cancellation, route management, and passenger data handling using national identity number.',
    imageUrls: [],
    technologies: ['C++', 'Object-Oriented Programming', 'Data Structures', 'File Handling'],
  },
  {
    slug: 'dc-power-supply',
    title: '220V AC To Variable 0-12V DC Converter (DC Power Supply)',
    shortDescription: 'Designed a PCB-based 0–12V, 1A variable DC power supply using AC step-down, rectification, filtering, and regulation, verified through simulation and hardware testing.',
    longDescription: [
      'Design and Implementation of a Variable AC to DC Power Supply',
      'Designed a 0–12V variable DC power supply with 1A current output.',
      'Incorporated transformer-based voltage reduction and diode bridge rectification.',
      'Used a filter capacitor for waveform smoothing.',
      'Implemented voltage regulation using a variable regulator and potentiometer.',
      'Verified performance through simulations and hardware testing.',
      'Fabricated a PCB for the final circuit.',
      'Suitable for powering low-voltage electronic devices.',
    ],
    imageUrls: [
        'https://res.cloudinary.com/dcajabot9/image/upload/v1750576096/Project_4-1-1_final1_rwqywk.jpg',
        'https://res.cloudinary.com/dcajabot9/image/upload/v1750576096/Project_4-1-2hardware_simulation_xooejx.jpg'
    ],
    imageHints: ['circuit pcb', 'circuit simulation'],
    technologies: ['Power Electronics', 'Circuit Design', 'PCB Design', 'Rectifiers', 'Voltage Regulation'],
  },
  {
    slug: 'capacitor-inductor-cst-studio',
    title: 'Capacitor and Inductor Design in CST Studio',
    shortDescription: 'Designed and simulated capacitors and inductors using CST Studio to analyze electromagnetic field behavior and extract component parameters.',
    longDescription: `This project involved designing and simulating capacitors and inductors using CST Studio’s 3D electromagnetic simulation tools. Custom component geometries were modeled, and simulations were conducted to analyze electric and magnetic field distributions.

A parametric sweep was applied to study how changes in physical dimensions affected performance metrics such as capacitance and inductance. This enabled the optimization of design parameters to achieve the desired electrical characteristics.

The project provided practical experience in electromagnetic simulation, parametric analysis, and passive component modeling using CST Studio.`,
    imageUrls: ['https://res.cloudinary.com/dcajabot9/image/upload/v1750576097/Project_4_qkjdm8.jpg'],
    imageHints: ['capacitor simulation'],
    technologies: ['CST Studio', 'Electromagnetic Simulation', 'Component Modeling', 'Parametric Analysis'],
  },
  {
    slug: 'mobile-controlled-car-stm32',
    title: 'Mobile Controlled Car via Bluetooth using STM32F1 Microcontroller',
    shortDescription: 'Developed a Bluetooth-controlled car using STM32F1, operable via an Android smartphone app for directional control.',
    longDescription: `This project involved designing and building a Bluetooth-controlled robotic car using the STM32F1 microcontroller. The system allowed a user to control the car’s movement through an Android smartphone application.

The Bluetooth module (HC-05) was used to establish wireless serial communication between the phone and the microcontroller. Upon receiving commands via Bluetooth, the STM32F1 decoded and executed motor control signals to drive the car in different directions—forward, reverse, left, and right.

The car's motor driver circuit was implemented to control two DC motors based on input commands. The firmware was developed using embedded C and uploaded via STM32CubeIDE. Real-time testing verified seamless connectivity, accurate motor responses, and stable directional control.

This project provided practical experience in embedded hardware design, Bluetooth communication, and mobile interfacing for robotic applications.`,
    imageUrls: ['https://res.cloudinary.com/dcajabot9/image/upload/v1750576094/Project_3_tbnicu.jpg'],
    imageHints: ['robotic car bluetooth'],
    technologies: ['STM32F1', 'Bluetooth', 'Android', 'Embedded C', 'Robotics', 'STM32CubeIDE'],
  },
  {
    slug: 'pcb-design-fabrication',
    title: 'PCB Design and Fabrication',
    shortDescription: 'Designed and fabricated multiple custom PCBs for various projects. This included schematic design, layout routing, and preparing Gerber files for manufacturing.',
    longDescription: 'Designed and fabricated multiple custom PCBs for various projects. This included schematic design, layout routing, and preparing Gerber files for manufacturing.',
    imageUrls: ['https://res.cloudinary.com/dcajabot9/image/upload/v1750576096/Project_2_yz3zdx.jpg'],
    imageHints: ['circuit board design'],
    technologies: ['PCB Design', 'Schematic Design', 'Gerber Files', 'Hardware Fabrication'],
  },
  {
    slug: 'temperature-sensor-stm32',
    title: 'Temperature measuring device using STM32F1 Microcontroller',
    shortDescription: 'Designed and implemented a temperature measuring device using an LM35 temperature measuring sensor.',
    longDescription: 'Designed and implemented a temperature measuring device using an LM35 temperature measuring sensor.',
    imageUrls: [],
    imageHints: ['temperature sensor circuit'],
    technologies: ['STM32F1', 'LM35 Sensor', 'Embedded Systems', 'Analog-to-Digital Conversion'],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
}

    
