const express = require("express");
const router = express.Router();

const responses = {
  "Hello": "How can I assist you today?",
  "hello": "Welcome! How can I help you?",
  "hlo": "Welcome! How can I help you?",
  "Hlo": "How can I assist you today?",
  "hey": "hello",
  "Hey": "hello",
  "how are you": "fine",
  "Goodbye!": "Goodbye! Take care.",
  "Take care.": "Goodbye! Take care.",
  "By": "Bye! Have a great day.",
  "ok": "fine",
  "Thank you": "Thank you for chatting with us. Stay healthy!",
  "thank you": "Thank you for chatting with us. Stay healthy!",
  "Thanku": "Thank you for chatting with us. Stay healthy!",
  "thanku": "Thank you for chatting with us. Stay healthy!",
  "Thank you for help": "Thank you for chatting with us. Stay healthy!",
  
    
      "sinusitis": "Precautions: Avoid known allergens, keep nasal passages moist. Do's: Use a humidifier, drink plenty of fluids. Don'ts: Avoid smoking, avoid dry environments. Tablets: Decongestants, Antibiotics (if bacterial).",
      "acid reflux (GERD)": "Precautions: Eat smaller meals, avoid lying down after eating. Do's: Maintain a healthy weight, eat slowly. Don'ts: Avoid spicy foods, avoid alcohol and caffeine. Tablets: Antacids, H2 blockers, Proton pump inhibitors.",
      "anemia": "Precautions: Eat iron-rich foods, avoid caffeine with meals. Do's: Take iron supplements, eat a balanced diet. Don'ts: Avoid donating blood frequently, avoid undercooked foods. Tablets: Ferrous sulfate, Vitamin B12 supplements.",
      "eczema": "Precautions: Keep skin moisturized, avoid harsh soaps. Do's: Use prescribed creams, wear soft fabrics. Don'ts: Avoid scratching, avoid hot showers. Tablets: Antihistamines, Topical corticosteroids.",
      "hypertensive heart disease": "Precautions: Monitor blood pressure regularly, maintain a healthy weight. Do's: Eat a low-sodium diet, exercise regularly. Don'ts: Avoid stress, avoid high-fat foods. Tablets: ACE inhibitors, Beta-blockers.",
      "irritable bowel syndrome (IBS)": "Precautions: Avoid trigger foods, eat high-fiber foods. Do's: Drink plenty of water, exercise regularly. Don'ts: Avoid caffeine, avoid large meals. Tablets: Antispasmodics, Laxatives (if needed).",
      "kidney stones": "Precautions: Stay hydrated, reduce salt intake. Do's: Drink plenty of water, eat a balanced diet. Don'ts: Avoid high-oxalate foods, avoid dehydration. Tablets: Pain relievers, Alpha blockers.",
      "liver disease": "Precautions: Avoid alcohol, maintain a healthy weight. Do's: Eat a balanced diet, get regular check-ups. Don'ts: Avoid fatty foods, avoid unprescribed medications. Tablets: Antivirals (if viral hepatitis), Diuretics.",
      "obesity": "Precautions: Eat a balanced diet, avoid sugary drinks. Do's: Exercise regularly, monitor your weight. Don'ts: Avoid fast food, avoid sedentary lifestyle. Tablets: Orlistat, Phentermine (under medical supervision).",
      "osteoporosis": "Precautions: Eat calcium-rich foods, avoid smoking. Do's: Take calcium and vitamin D supplements, exercise regularly. Don'ts: Avoid high-sodium foods, avoid excessive alcohol. Tablets: Bisphosphonates, Calcitonin.",
      "psoriasis": "Precautions: Keep skin moisturized, avoid triggers. Do's: Use prescribed creams, maintain a healthy lifestyle. Don'ts: Avoid scratching, avoid stress. Tablets: Topical corticosteroids, Biologics.",
      "tuberculosis (TB)": "Precautions: Avoid close contact with infected individuals, ensure good ventilation. Do's: Take prescribed medication, get regular check-ups. Don'ts: Avoid crowded places, avoid stopping treatment prematurely. Tablets: Isoniazid, Rifampin.",
      "chronic obstructive pulmonary disease (COPD)": "Precautions: Avoid smoking, avoid respiratory irritants. Do's: Use inhalers as prescribed, stay active. Don'ts: Avoid cold air, avoid pollutants. Tablets: Bronchodilators, Steroids.",
      "hepatitis": "Precautions: Avoid sharing needles, practice safe sex. Do's: Get vaccinated, eat a balanced diet. Don'ts: Avoid alcohol, avoid unprescribed medications. Tablets: Antivirals, Immune modulators.",
      "dengue fever": "Precautions: Avoid mosquito bites, use mosquito repellents. Do's: Stay hydrated, rest. Don'ts: Avoid NSAIDs, avoid exposure to mosquitoes. Tablets: Acetaminophen (for fever), Oral rehydration salts.",
      "malaria": "Precautions: Avoid mosquito bites, use mosquito nets. Do's: Take antimalarial medication, stay in well-screened areas. Don'ts: Avoid going out during peak mosquito hours, avoid untreated water. Tablets: Chloroquine, Artemisinin-based combination therapies (ACTs).",
      "HIV/AIDS": "Precautions: Practice safe sex, avoid sharing needles. Do's: Take antiretroviral therapy (ART), get regular health check-ups. Don'ts: Avoid exposure to infections, avoid unprescribed medications. Tablets: Antiretrovirals (ARVs).",
      "covid-19": "Precautions: Practice social distancing, wear masks. Do's: Wash hands regularly, get vaccinated. Don'ts: Avoid crowded places, avoid touching face. Tablets: Antivirals (if prescribed), Supportive care.",
    
    
 
    "diabetes": "Precautions: Monitor your blood sugar regularly, maintain a balanced diet, exercise regularly. Do's: Take your medication as prescribed, eat low-sugar foods, stay hydrated. Don'ts: Skip meals, consume sugary foods and drinks, ignore symptoms. Tablets: Metformin, Glipizide.",
    "hypertension": "Precautions: Check your blood pressure regularly, reduce sodium intake, exercise. Do's: Eat a low-sodium diet, take prescribed medications, avoid stress. Don'ts: Smoke, consume excessive alcohol, eat processed foods. Tablets: Lisinopril, Amlodipine, Hydrochlorothiazide.",
    "high cholesterol": "Precautions: Get your cholesterol levels checked regularly, maintain a healthy weight, exercise. Do's: Eat fiber-rich foods, exercise regularly, take medications as prescribed. Don'ts: Eat trans fats, consume excessive saturated fats, be sedentary. Tablets: Atorvastatin, Simvastatin.",
    "asthma": "Precautions: Avoid asthma triggers, use an inhaler as prescribed, monitor symptoms. Do's: Use your inhaler, avoid allergens, maintain a healthy weight. Don'ts: Smoke, expose yourself to allergens, ignore asthma symptoms. Tablets: Inhaled corticosteroids, bronchodilators.",
    "anxiety": "Precautions: Avoid stressors, maintain a regular routine, seek therapy if needed. Do's: Practice relaxation techniques, stay active, seek support from friends and family. Don'ts: Consume caffeine, avoid stressors, isolate yourself. Tablets: Benzodiazepines, SSRIs like Sertraline.",
    "depression": "Precautions: Monitor your mental health, seek therapy, take prescribed medications. Do's: Take prescribed medications, seek therapy, stay active. Don'ts: Isolate yourself, skip medications, consume alcohol. Tablets: SSRIs and SNRIs like Sertraline and Venlafaxine.",
    "arthritis": "Precautions: Avoid joint overuse, maintain a healthy weight, exercise regularly. Do's: Stay active, maintain a healthy weight, take prescribed medications. Don'ts: Be sedentary, ignore pain, consume inflammatory foods. Tablets: NSAIDs, corticosteroids, DMARDs.",
    "epilepsy": "Precautions: Take your medication as prescribed, avoid known triggers, get enough sleep. Do's: Take anticonvulsants regularly, maintain a healthy lifestyle, avoid triggers. Don'ts: Skip medications, consume alcohol, engage in risky activities. Tablets: Lamotrigine, Levetiracetam.",
    "thyroid issues": "Precautions: Regularly monitor thyroid levels, take prescribed medication, eat a balanced diet. Do's: Take your medication regularly, monitor symptoms, follow up with your doctor. Don'ts: Skip medications, consume excessive iodine, ignore symptoms. Tablets: Levothyroxine.",
    "migraine": "Precautions: Avoid known triggers, maintain a regular sleep schedule, manage stress. Do's: Take prescribed medications, stay hydrated, rest in a dark room. Don'ts: Skip meals, consume caffeine, expose yourself to bright lights. Tablets: Triptans, NSAIDs, anti-nausea drugs.",
    "common cold": "Precautions: Wash hands regularly, avoid close contact with infected individuals. Do's: Stay hydrated, rest adequately. Don'ts: Avoid sharing personal items, avoid exposure to cold weather. Tablets: Paracetamol, Antihistamines.",
    "flu": "Precautions: Get vaccinated annually, practice good hygiene. Do's: Drink plenty of fluids, rest and stay warm. Don'ts: Avoid going to crowded places, avoid close contact with others. Tablets: Oseltamivir, Ibuprofen.",
    "allergies": "Precautions: Avoid known allergens, keep windows closed during high pollen seasons. Do's: Use air purifiers, take prescribed medications. Don'ts: Avoid outdoor activities during high pollen count, avoid pets if allergic. Tablets: Antihistamines, Decongestants.",
    "gastroenteritis": "Precautions: Wash hands regularly, avoid contaminated food and water. Do's: Stay hydrated, eat bland foods. Don'ts: Avoid dairy products, avoid caffeine and alcohol. Tablets: ORS (Oral Rehydration Salts), Antidiarrheals.",
    "urinary tract infection (UTI)": "Precautions: Drink plenty of water, urinate frequently. Do's: Take prescribed antibiotics, maintain good hygiene. Don'ts: Avoid holding urine for long periods, avoid using irritating feminine products. Tablets: Antibiotics like Ciprofloxacin, Nitrofurantoin.",
    "bronchitis": "Precautions: Avoid smoking, avoid respiratory irritants. Do's: Stay hydrated, rest. Don'ts: Avoid exposure to pollutants, avoid strenuous activities. Tablets: Cough suppressants, Bronchodilators.",
    "skin infection": "Precautions: Keep the affected area clean, avoid sharing personal items. Do's: Use prescribed ointments, keep the area dry. Don'ts: Avoid scratching the affected area, avoid tight clothing. Tablets: Antibiotics, Antifungals.",
    "sinusitis": "Precautions: Avoid known allergens, keep nasal passages moist. Do's: Use a humidifier, drink plenty of fluids. Don'ts: Avoid smoking, avoid dry environments. Tablets: Decongestants, Antibiotics (if bacterial).",
  "acid reflux (GERD)": "Precautions: Eat smaller meals, avoid lying down after eating. Do's: Maintain a healthy weight, eat slowly. Don'ts: Avoid spicy foods, avoid alcohol and caffeine. Tablets: Antacids, H2 blockers, Proton pump inhibitors.",
  "anemia": "Precautions: Eat iron-rich foods, avoid caffeine with meals. Do's: Take iron supplements, eat a balanced diet. Don'ts: Avoid donating blood frequently, avoid undercooked foods. Tablets: Ferrous sulfate, Vitamin B12 supplements.",
  "eczema": "Precautions: Keep skin moisturized, avoid harsh soaps. Do's: Use prescribed creams, wear soft fabrics. Don'ts: Avoid scratching, avoid hot showers. Tablets: Antihistamines, Topical corticosteroids.",
  "hypertensive heart disease": "Precautions: Monitor blood pressure regularly, maintain a healthy weight. Do's: Eat a low-sodium diet, exercise regularly. Don'ts: Avoid stress, avoid high-fat foods. Tablets: ACE inhibitors, Beta-blockers.",
  "irritable bowel syndrome (IBS)": "Precautions: Avoid trigger foods, eat high-fiber foods. Do's: Drink plenty of water, exercise regularly. Don'ts: Avoid caffeine, avoid large meals. Tablets: Antispasmodics, Laxatives (if needed).",
  "kidney stones": "Precautions: Stay hydrated, reduce salt intake. Do's: Drink plenty of water, eat a balanced diet. Don'ts: Avoid high-oxalate foods, avoid dehydration. Tablets: Pain relievers, Alpha blockers.",
  "liver disease": "Precautions: Avoid alcohol, maintain a healthy weight. Do's: Eat a balanced diet, get regular check-ups. Don'ts: Avoid fatty foods, avoid unprescribed medications. Tablets: Antivirals (if viral hepatitis), Diuretics.",
  "obesity": "Precautions: Eat a balanced diet, avoid sugary drinks. Do's: Exercise regularly, monitor your weight. Don'ts: Avoid fast food, avoid sedentary lifestyle. Tablets: Orlistat, Phentermine (under medical supervision).",
  
};

router.post("/chat", (req, res) => {
  const userQuestion = req.body.question;
  const answer =
    responses[userQuestion] || "I'm sorry, I don't understand that question.";
  res.send({ answer });
});

module.exports = router;
