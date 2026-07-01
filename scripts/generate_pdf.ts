import { jsPDF } from "jspdf";
import * as fs from "fs";
import * as path from "path";

async function generate() {
  console.log("Starting PDF generation...");
  const doc = new jsPDF("p", "mm", "a4");
  const pageWidth = doc.internal.pageSize.width; // 210
  const pageHeight = doc.internal.pageSize.height; // 297

  // Color constants (matching the uploaded PDF screenshots)
  const sidebarColor = [217, 232, 252]; // Soft light blue #D9E8FC
  const bannerBgColor = [200, 222, 252]; // slightly darker banner light blue
  const darkBlueText = [15, 32, 67]; // Dark navy
  const darkGrayText = [51, 65, 85]; // Slate 700
  const lightGrayText = [100, 116, 139]; // Slate 500

  // We have a passport size image in the assets
  const imagePath = path.join(process.cwd(), "src/assets/images/passport_size.jpg");
  let imageBase64 = "";
  try {
    if (fs.existsSync(imagePath)) {
      const imageBuffer = fs.readFileSync(imagePath);
      imageBase64 = "data:image/jpeg;base64," + imageBuffer.toString("base64");
      console.log("Successfully loaded passport size image.");
    } else {
      console.log("Passport size image not found at:", imagePath);
    }
  } catch (err) {
    console.error("Error reading passport size image:", err);
  }

  // --- PAGE 1 ---
  
  // Left column sidebar background
  doc.setFillColor(sidebarColor[0], sidebarColor[1], sidebarColor[2]);
  doc.rect(0, 0, 75, pageHeight, "F");

  // Border lines for column division
  doc.setDrawColor(200, 220, 245);
  doc.setLineWidth(0.5);
  doc.line(75, 0, 75, pageHeight);

  // Draw Passport Photo in Left Sidebar
  let sidebarY = 15;
  if (imageBase64) {
    // Drawn inside a nice border frame
    doc.setFillColor(255, 255, 255);
    doc.rect(14, sidebarY - 1, 46, 46, "F");
    doc.setDrawColor(15, 32, 67);
    doc.setLineWidth(0.5);
    doc.rect(14, sidebarY - 1, 46, 46, "S");
    doc.addImage(imageBase64, "JPEG", 15, sidebarY, 44, 44);
    sidebarY += 52;
  } else {
    sidebarY += 10;
  }

  // --- LEFT COLUMN CONTENT (PAGE 1) ---
  
  // Contact Title
  doc.setFillColor(bannerBgColor[0], bannerBgColor[1], bannerBgColor[2]);
  doc.rect(10, sidebarY, 55, 8, "F");
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(darkBlueText[0], darkBlueText[1], darkBlueText[2]);
  doc.text("CONTACT", 14, sidebarY + 5.5);
  sidebarY += 13;

  // Contact Details
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(darkBlueText[0], darkBlueText[1], darkBlueText[2]);
  
  // Phone
  doc.text("Phone", 10, sidebarY);
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(darkGrayText[0], darkGrayText[1], darkGrayText[2]);
  doc.text("+91 99044 34601", 10, sidebarY + 4);
  sidebarY += 9;

  // Email
  doc.setFont("Helvetica", "bold");
  doc.setTextColor(darkBlueText[0], darkBlueText[1], darkBlueText[2]);
  doc.text("Email", 10, sidebarY);
  doc.setFont("Helvetica", "normal");
  doc.setTextColor(darkGrayText[0], darkGrayText[1], darkGrayText[2]);
  doc.text("vekariyadilip444@gmail.com", 10, sidebarY + 4);
  sidebarY += 9;

  // Location
  doc.setFont("Helvetica", "bold");
  doc.setTextColor(darkBlueText[0], darkBlueText[1], darkBlueText[2]);
  doc.text("Address", 10, sidebarY);
  doc.setFont("Helvetica", "normal");
  doc.setTextColor(darkGrayText[0], darkGrayText[1], darkGrayText[2]);
  const addrLines = doc.splitTextToSize("Narnarayan Nagar, Junavas, Sukhpar, Bhuj - Kutch", 55);
  doc.text(addrLines, 10, sidebarY + 4);
  sidebarY += 15;

  // Skills Title
  doc.setFillColor(bannerBgColor[0], bannerBgColor[1], bannerBgColor[2]);
  doc.rect(10, sidebarY, 55, 8, "F");
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(darkBlueText[0], darkBlueText[1], darkBlueText[2]);
  doc.text("SKILLS", 14, sidebarY + 5.5);
  sidebarY += 13;

  // Skills items
  const skills = [
    "App Development",
    "Flutter",
    "Fast Learner",
    "Management",
    "Team Work",
    "Multitasking"
  ];
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(darkGrayText[0], darkGrayText[1], darkGrayText[2]);
  skills.forEach((skill) => {
    doc.text("• " + skill, 12, sidebarY);
    sidebarY += 5;
  });
  sidebarY += 6;

  // Languages Title
  doc.setFillColor(bannerBgColor[0], bannerBgColor[1], bannerBgColor[2]);
  doc.rect(10, sidebarY, 55, 8, "F");
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(darkBlueText[0], darkBlueText[1], darkBlueText[2]);
  doc.text("LANGUAGES", 14, sidebarY + 5.5);
  sidebarY += 13;

  // Languages items
  const languages = ["English", "Gujarati", "Hindi", "French"];
  doc.setFont("Helvetica", "normal");
  languages.forEach((lang) => {
    doc.text("• " + lang, 12, sidebarY);
    sidebarY += 5;
  });


  // --- RIGHT COLUMN CONTENT (PAGE 1) ---
  let rightY = 25;

  // Name Header
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(28);
  doc.setTextColor(darkBlueText[0], darkBlueText[1], darkBlueText[2]);
  doc.text("Dilip Vekariya", 85, rightY);
  
  // Accent line
  doc.setDrawColor(79, 140, 255);
  doc.setLineWidth(1);
  doc.line(85, rightY + 3, 195, rightY + 3);
  rightY += 15;

  // EDUCATION Title Banner
  doc.setFillColor(bannerBgColor[0], bannerBgColor[1], bannerBgColor[2]);
  doc.rect(85, rightY, 110, 8, "F");
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(darkBlueText[0], darkBlueText[1], darkBlueText[2]);
  doc.text("EDUCATION", 89, rightY + 5.5);
  rightY += 14;

  const education = [
    {
      institute: "HJD INSTITUTE OF TECHNICAL EDUCATION AND RESEARCH",
      degree: "Bachelor in Computer Science and Engineering",
      duration: "Jul, 2019 - Jul, 2023"
    },
    {
      institute: "SHREE SWAMINARAYAN GURUKUL SURAT",
      degree: "Higher Secondary Education",
      duration: "Jun, 2017 - Mar, 2019"
    },
    {
      institute: "SHREE SWAMINARAYAN GURUKUL SURAT",
      degree: "Secondary Education",
      duration: "Jun, 2015 - Mar, 2017"
    }
  ];

  education.forEach((edu) => {
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(darkBlueText[0], darkBlueText[1], darkBlueText[2]);
    const instLines = doc.splitTextToSize(edu.institute, 110);
    doc.text(instLines, 85, rightY);
    rightY += (instLines.length * 4);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(darkGrayText[0], darkGrayText[1], darkGrayText[2]);
    doc.text(`${edu.degree}  /  ${edu.duration}`, 85, rightY);
    rightY += 8;
  });

  rightY += 2;

  // WORK EXPERIENCE Title Banner
  doc.setFillColor(bannerBgColor[0], bannerBgColor[1], bannerBgColor[2]);
  doc.rect(85, rightY, 110, 8, "F");
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(darkBlueText[0], darkBlueText[1], darkBlueText[2]);
  doc.text("WORK EXPERIENCE", 89, rightY + 5.5);
  rightY += 14;

  // Item 1: Lecturer
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(darkBlueText[0], darkBlueText[1], darkBlueText[2]);
  doc.text("LECTURER", 85, rightY);
  rightY += 4;
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(darkGrayText[0], darkGrayText[1], darkGrayText[2]);
  doc.text("HJD INSTITUTE OF TECHNICAL EDUCATION AND RESEARCH  /  Apr, 2024 - Present", 85, rightY);
  rightY += 5;

  const lecturerHighlights = [
    "Lecturer in computer science and engineering department",
    "GTU endorse faculty.",
    "Manage all types of GTU portal",
    "Sports head in engineering department",
    "Manage events",
    "Guided undergraduate and graduate students on academic projects, research papers, and career planning.",
    "Taught courses on Data Structures, Software Engineering, Python and Artificial Intelligence."
  ];

  lecturerHighlights.forEach((hl) => {
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(darkGrayText[0], darkGrayText[1], darkGrayText[2]);
    const hlLines = doc.splitTextToSize("- " + hl, 110);
    doc.text(hlLines, 85, rightY);
    rightY += (hlLines.length * 3.6);
  });

  rightY += 4;

  // Item 2: Shree Softech
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(darkBlueText[0], darkBlueText[1], darkBlueText[2]);
  doc.text("SHREE SOFTECH", 85, rightY);
  rightY += 4;
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(darkGrayText[0], darkGrayText[1], darkGrayText[2]);
  doc.text("INTERNSHIP  /  Feb, 2023 - Jul, 2023", 85, rightY);
  rightY += 5;

  const softechHighlights = [
    "Managed customer inquiries via email, phone calls, and live chat services.",
    "Updated the company's website with relevant content on a regular basis."
  ];

  softechHighlights.forEach((hl) => {
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(darkGrayText[0], darkGrayText[1], darkGrayText[2]);
    const hlLines = doc.splitTextToSize("- " + hl, 110);
    doc.text(hlLines, 85, rightY);
    rightY += (hlLines.length * 3.6);
  });


  // --- PAGE 2 ---
  doc.addPage();

  // Sidebar Background Page 2
  doc.setFillColor(sidebarColor[0], sidebarColor[1], sidebarColor[2]);
  doc.rect(0, 0, 75, pageHeight, "F");
  doc.line(75, 0, 75, pageHeight);

  // --- LEFT COLUMN CONTENT (PAGE 2) ---
  sidebarY = 20;

  // Interests Title
  doc.setFillColor(bannerBgColor[0], bannerBgColor[1], bannerBgColor[2]);
  doc.rect(10, sidebarY, 55, 8, "F");
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(darkBlueText[0], darkBlueText[1], darkBlueText[2]);
  doc.text("INTERESTS", 14, sidebarY + 5.5);
  sidebarY += 13;

  // Interests list
  const interests = ["Teaching", "Travelling", "Kho-Kho", "Cooking"];
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(darkGrayText[0], darkGrayText[1], darkGrayText[2]);
  interests.forEach((item) => {
    doc.text("• " + item, 12, sidebarY);
    sidebarY += 5;
  });


  // --- RIGHT COLUMN CONTENT (PAGE 2) ---
  rightY = 20;

  // Work Experience Continued
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(darkBlueText[0], darkBlueText[1], darkBlueText[2]);
  // Softech continued highlights
  const softechHighlightsPage2 = [
    "Attended meetings with clients or partners as required by the project team.",
    "Worked well in team environment as well as independently.",
    "Developed the software as per clients requirements.",
    "Worked with dart language."
  ];

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(darkGrayText[0], darkGrayText[1], darkGrayText[2]);
  softechHighlightsPage2.forEach((hl) => {
    const hlLines = doc.splitTextToSize("- " + hl, 110);
    doc.text(hlLines, 85, rightY);
    rightY += (hlLines.length * 3.6);
  });

  rightY += 6;

  // Item 3: LPK Technosoft
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(darkBlueText[0], darkBlueText[1], darkBlueText[2]);
  doc.text("LPK TECHNOSOFT", 85, rightY);
  rightY += 4;
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(darkGrayText[0], darkGrayText[1], darkGrayText[2]);
  doc.text("INTERNSHIP  /  Jun, 2022 - Jul, 2022", 85, rightY);
  rightY += 5;

  const lpkHighlights = [
    "Work with team members to promote great customer service and pleasant work environment.",
    "Worked with teams to support goals and build experience.",
    "Worked well in team environment as well as independently."
  ];

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(darkGrayText[0], darkGrayText[1], darkGrayText[2]);
  lpkHighlights.forEach((hl) => {
    const hlLines = doc.splitTextToSize("- " + hl, 110);
    doc.text(hlLines, 85, rightY);
    rightY += (hlLines.length * 3.6);
  });

  rightY += 12;

  // PROJECTS Title Banner
  doc.setFillColor(bannerBgColor[0], bannerBgColor[1], bannerBgColor[2]);
  doc.rect(85, rightY, 110, 8, "F");
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(darkBlueText[0], darkBlueText[1], darkBlueText[2]);
  doc.text("PROJECTS", 89, rightY + 5.5);
  rightY += 14;

  const projects = [
    {
      title: "DC (Chat Application)",
      description: "Its is a one kind of chat application where people can create accounts and connect with others seamlessly."
    },
    {
      title: "BMI CALCULATOR",
      description: "Designed a Body Mass Index calculator that assesses fitness levels and provides for achieving optimal health and wellness."
    }
  ];

  projects.forEach((proj) => {
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(darkBlueText[0], darkBlueText[1], darkBlueText[2]);
    doc.text(proj.title, 85, rightY);
    rightY += 4.5;

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(darkGrayText[0], darkGrayText[1], darkGrayText[2]);
    const descLines = doc.splitTextToSize(proj.description, 110);
    doc.text(descLines, 85, rightY);
    rightY += (descLines.length * 4) + 6;
  });

  // Save to target path
  const outputPath = path.join(process.cwd(), "src/assets/resume.pdf");
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const pdfBuffer = Buffer.from(doc.output("arraybuffer"));
  fs.writeFileSync(outputPath, pdfBuffer);
  console.log("PDF written successfully to:", outputPath);
}

generate().catch(err => {
  console.error("Failed to generate PDF:", err);
});
