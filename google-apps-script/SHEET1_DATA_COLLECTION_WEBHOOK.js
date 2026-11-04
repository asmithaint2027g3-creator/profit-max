/**
 * =========================================================================================
 * PROFIT MACHINES - APPS SCRIPT WEBHOOK & EXECUTIVE AUTOMATION ENGINE (V7 - ULTRA PRO)
 * =========================================================================================
 * Production Webhook Receiver & Executive Automation Engine for PROFIT MACHINES
 * 
 * Sender Identity: Profit Machines Executive Analytics <asmitha.int2027g3@gmail.com>
 * Organization: PROFIT MACHINES
 * 
 * Features:
 * 1. Dedicated Ad Campaign & Inbound Routing: Isolates and routes Ad/Campaign leads seamlessly.
 * 2. High-End Executive Cyber-Theme Email UI: Profit Machines glassmorphism badges, UTM pills & quick actions.
 * 3. Drive Resume Archiving: Automatically stores career applicant resumes into Google Drive.
 * 4. Monthly Career Digest: Monthly scheduled forwarder of candidate applications & resumes.
 * 5. Advanced Analytics & Reporting: Daily & weekly automated digests with KPI cards and metrics.
 * 6. Strict Recipient Routing: Exclusively delivers to poojasri@trustgrid.ai & asmitha.int2027g3@gmail.com.
 * =========================================================================================
 */

// =========================================================================================
// 1. GLOBAL CONFIGURATION & RECIPIENTS
// =========================================================================================

const CONFIG = {
  // Main Profit Machines Data Collection & Multi-Form Tracking Spreadsheet ID (Sheet 1)
  MAIN_SPREADSHEET_ID: "1KXcYogXkE3mlNTA-WMpBADlzXO6TAlJCeK4OaQiNlTY",

  // Dedicated Analytics & Intelligence Spreadsheet ID (Sheet 2)
  ANALYTICS_SPREADSHEET_ID: "1t69wLDto7T0p5SE9yKDwEK1gnBfawAkV3AuQFbrlbzw",

  // Google Drive folder used to archive candidate resumes
  CAREER_RESUMES_FOLDER_NAME: "ProfitMachines_Career_Resumes"
};

const EMAIL_CONFIG = {
  name: "PROFIT MACHINES Business Intelligence",
  companyName: "PROFIT MACHINES",
  website: "https://profit-max-delta.vercel.app", // Production website URL
  replyTo: "asmitha.int2027g3@gmail.com",
  adminEmail: "asmitha.int2027g3@gmail.com",
  
  // Recipients for Lead & Sales Inquiries (Strictly limited to authorized team)
  salesEmails: [
    "poojasri@trustgrid.ai",
    "asmitha.int2027g3@gmail.com"
  ],
  
  // Recipients for Ad Campaign Lead Generation
  adCampaignEmails: [
    "poojasri@trustgrid.ai",
    "asmitha.int2027g3@gmail.com"
  ],

  // Recipients for Career Applications & Monthly Resumes
  careerEmails: [
    "poojasri@trustgrid.ai",
    "asmitha.int2027g3@gmail.com"
  ],

  // Recipients for Daily, Weekly & Monthly Analytics Reports
  reportEmails: [
    "poojasri@trustgrid.ai",
    "asmitha.int2027g3@gmail.com"
  ],

  // Same WhatsApp line used on the live site (components/ui/whatsapp-cta.tsx)
  whatsappNumber: "9513088611",

  // Self-serve booking slot offered to Consulting Sessions leads
  consultingCalendarUrl: "https://calendar.app.google/ZZF7cW8GVX8r6Bwf6"
};

// =========================================================================================
// 2. SHEET TAB HEADERS & CONFIGURATION
// =========================================================================================

var masterMetrics = [
  "Session ID","Visitor ID","Organization","IP Address","IP Location","Variant",
  "Viewport","OS","Screen Resolution","Connection Type","Language","Dark Theme",
  "Time Zone","Page Depth","Active Tab","Session Age","Initial Source","Landing Page",
  "UTM Source","UTM Medium","UTM Campaign","UTM Term","UTM Content","Referrer Host","Search Engine","First Visit Date",
  "Returning User","Cursor Velocity","Rage Clicks","Scroll Velocity","Max Scroll Depth",
  "Total Click Count","Average Dwell Time","Total Active Time","Idle Time","Tab Switches",
  "Exit Intent Triggered","Interaction Frequency","Last Active Timestamp","Lead Generated",
  "Form Started","Form Abandoned","Form Last Field","Whitepaper Downloaded",
  "Diagnostic Requested","Partner Inquiry Count","Career Inquiry Count",
  "Chatbot Interactions","CTA Conversion Rate",
  "Interest Agent Governance","Interest Red Teaming","Interest Compliance Audits",
  "Interest AI Readiness","Interest Custom Guardrails","Interest Model Security",
  "Weighted Rank","Engagement Score","Segment","Hot Lead Flag","Intent Rank","Dwell Time","Interactions","Timestamp"
];

var SCHEMA_95_HEADERS = [
  "ip_address", "geo_country", "geo_state", "geo_city", "geo_latitude", "geo_longitude",
  "user_id", "user_name", "user_email", "user_type", "returning_user",
  "first_visit_timestamp", "last_visit_timestamp", "total_sessions", "total_time_spent", "avg_session_duration",
  "session_id", "session_number", "session_start_time", "session_end_time", "total_session_duration", "total_pages_visited", "bounce",
  "traffic_source", "referrer_url", "campaign_name", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content",
  "page", "page_url", "previous_page", "next_page", "entry_page", "exit_page", "page_title", "time_on_page", "scroll_percentage", "max_scroll_depth", "interaction_count", "inactivity_time",
  "event_id", "event_name", "event_category", "event_action", "event_label", "section", "element_type", "element_id", "element_class", "element_text", "click_position_x", "click_position_y",
  "form_id", "form_field_name", "form_completion_status", "form_abandonment", "goal_name", "goal_completed", "conversion_id", "conversion_value", "funnel_step",
  "device_type", "device_brand", "device_model", "operating_system", "browser", "browser_version", "screen_width", "screen_height", "viewport_width", "viewport_height", "language", "timezone",
  "network_type", "connection_speed", "page_load_time", "dom_load_time", "first_contentful_paint", "largest_contentful_paint", "time_to_interactive",
  "js_error_message", "api_error_message", "http_status_code", "cpu_cores", "memory_size", "tab_visibility_status", "back_button_used", "copy_event", "paste_event", "rage_click_detected", "user_segment", "timestamp"
];

var TAB_CONFIGS = {
  // Master 95-Column Live Behavioral Telemetry for Profit Machines
  "Live_Traffic_Events": SCHEMA_95_HEADERS,

  // 1. Inbound Leads / Quick Diagnostics (LeadCaptureSection.tsx)
  "Form_Inbound_Leads": [
    "Submission ID", "Full Name", "Work Email", "Phone", "Company Name",
    "Interest / Solution", "Annual Revenue", "Timeline", "Primary Challenge",
    "Source", "UTM Source", "UTM Medium", "UTM Campaign", "UTM Term", "UTM Content",
    "Status", "IP Location", "IP Address", "Timestamp"
  ],

  // 2. Executive Consultation Bookings (BookConsultation.tsx & BookDemo.tsx)
  "Form_Consultation_Bookings": [
    "Submission ID", "Full Name", "Work Email", "Phone", "Company Name",
    "Designation / Role", "Transformation Interest", "Annual Revenue", "Primary Challenge", "Target Timeline",
    "Message / Scope", "Source", "UTM Source", "UTM Medium", "UTM Campaign", "UTM Term", "UTM Content",
    "Status", "IP Location", "IP Address", "Timestamp"
  ],

  // 3. Talk to Growth / AI Expert (TalkToExpert.tsx)
  "Form_Expert_Consulting": [
    "Submission ID", "Full Name", "Work Email", "Phone", "Company Name",
    "Focus Area", "Urgency / Timeline", "Message",
    "Source", "UTM Source", "UTM Medium", "UTM Campaign", "UTM Term", "UTM Content",
    "Status", "IP Location", "IP Address", "Timestamp"
  ],

  // 4. Profit Pool Discovery Diagnostics (DiscoveryPage.tsx)
  "Form_Diagnostic_Assessments": [
    "Submission ID", "Full Name", "Work Email", "Phone", "Company Name",
    "Industry", "Current Revenue", "Primary Leakage Area", "Estimated Leakage",
    "Diagnostic Score", "Answers Summary", "Message",
    "Source", "UTM Source", "UTM Medium", "UTM Campaign",
    "Status", "IP Location", "IP Address", "Timestamp"
  ],

  // 5. Partner Applications (Partners.tsx)
  "Form_Partner_Applications": [
    "Submission ID", "Name", "Work Email", "Phone", "Company Name",
    "Partner Type", "Primary Region", "Value Proposition / Proposal",
    "Source", "UTM Source", "UTM Medium", "UTM Campaign",
    "Status", "IP Location", "IP Address", "Timestamp"
  ],

  // 6. Career Applications (Career.tsx)
  "Form_Career_Applications": [
    "Submission ID", "Full Name", "Email", "Phone", "Role Applied",
    "Experience Level", "Portfolio / LinkedIn", "Resume Drive Link", "Drive File ID",
    "Cover Note / Message", "Source", "UTM Source", "UTM Medium", "UTM Campaign",
    "Status", "IP Location", "IP Address", "Timestamp"
  ],

  // 7. Chatbot Virtual Assistant Inquiries (ChatBot.tsx)
  "Form_Chatbot_Conversations": [
    "Submission ID", "Name", "Email", "Phone", "Company",
    "Topic / Intent", "Chat Summary", "Source",
    "UTM Source", "UTM Medium", "UTM Campaign",
    "Status", "IP Location", "IP Address", "Timestamp"
  ],

  // 8. Consolidated Form Submissions Master Log
  "Form_Submissions": [
    "Submission ID", "Form Name", "Name", "Email", "Company", "Role", "Phone",
    "Message / Details", "Resume Link", "Drive File ID",
    "UTM Source", "UTM Campaign", "IP Location", "IP Address", "Timestamp"
  ],

  // 9. Page Views Telemetry
  "Page_Views": [
    "Session ID", "Visitor ID", "Page Path", "Page Title", "Referrer", "Traffic Source",
    "UTM Source", "UTM Medium", "UTM Campaign", "Device", "Browser", "OS", "IP Location", "Timestamp"
  ],

  // 10. Sessions Telemetry
  "Sessions": [
    "Session ID", "Visitor ID", "Landing Page", "Referrer", "Traffic Source",
    "UTM Source", "UTM Campaign", "Device", "Browser", "OS", "Screen Size", "IP Location", "Timestamp"
  ],

  // 11. CTA & Interaction Clicks
  "CTA_Clicks": [
    "Session ID", "Visitor ID", "CTA Name", "Destination URL", "Section", "Page Path", "Device", "Timestamp"
  ],

  // 12. Enterprise User Registration (Two-Step Authentication & Onboarding)
  "User_Registration": [
    "Registration ID", "Full Name", "Business Email", "Mobile Number", "Preferred User ID",
    "Company Name", "Official Website", "Country", "State / Region", "City",
    "Industry Sector", "Sub-industry", "Company Headcount", "Business Operations",
    "Consent Status", "Registration Date", "Account Status"
  ],

  // 13. Security & Login Activity Audit Trail
  "Login_Activity": [
    "Activity ID", "User ID", "Full Name", "Business Email",
    "Login Date", "Login Time", "Login Status", "Logout Date and Time"
  ],

  // 14. Sales Calculator Telemetry
  "Calculator_Activity": [
    "Activity ID", "User ID", "Full Name", "Business Email",
    "Calculator Name", "Activity Date", "Activity Type"
  ],

  // 15. User Authentication Credentials Vault (Option B: Visible & Centralized Validation)
  "User_Credentials": [
    "User ID", "Business Email", "Full Name", "Password", "Created Date", "Account Status", "Last Login Date"
  ]
};

// Aliases mapping incoming form sheetNames to canonical tab names
var SHEET_NAME_ALIASES = {
  // Master 95-Column Live Behavioral Telemetry
  "telemetry_95": "Live_Traffic_Events",
  "telemetry": "Live_Traffic_Events",
  "livetrafficevents": "Live_Traffic_Events",
  "live_traffic_events": "Live_Traffic_Events",
  "mastertelemetry": "Live_Traffic_Events",
  "usercredentials": "User_Credentials",
  "user_credentials": "User_Credentials",
  "credentials": "User_Credentials",
  "users": "User_Credentials",
  "auth": "User_Credentials",

  // Telemetry Routes
  "pageview": "Page_Views",
  "pageviews": "Page_Views",
  "page_views": "Page_Views",
  "page_view": "Page_Views",
  "event": "CTA_Clicks",
  "events": "CTA_Clicks",
  "ctaclicks": "CTA_Clicks",
  "cta_clicks": "CTA_Clicks",
  "visitor": "Sessions",
  "visitors": "Sessions",
  "session": "Sessions",
  "sessions": "Sessions",
  "trafficanalytics": "Page_Views",

  // 1. Inbound Leads / Quick Diagnostics (LeadCaptureSection.tsx)
  "form": "Form_Inbound_Leads",
  "inboundleads": "Form_Inbound_Leads",
  "inbound_leads": "Form_Inbound_Leads",
  "inbound": "Form_Inbound_Leads",
  "leads": "Form_Inbound_Leads",
  "lead": "Form_Inbound_Leads",
  "quickdiagnostic": "Form_Inbound_Leads",
  "quick_diagnostic": "Form_Inbound_Leads",
  "contact": "Form_Inbound_Leads",
  "contactleads": "Form_Inbound_Leads",
  "contact_leads": "Form_Inbound_Leads",

  // 2. Executive Consultation Bookings (BookConsultation.tsx & BookDemo.tsx)
  "bookforconsultation": "Form_Consultation_Bookings",
  "book_for_consultation": "Form_Consultation_Bookings",
  "bookforconsulting": "Form_Consultation_Bookings",
  "book_for_consulting": "Form_Consultation_Bookings",
  "consultation": "Form_Consultation_Bookings",
  "consultationbookings": "Form_Consultation_Bookings",
  "consultation_bookings": "Form_Consultation_Bookings",
  "demo": "Form_Consultation_Bookings",
  "bookdemo": "Form_Consultation_Bookings",
  "book_demo": "Form_Consultation_Bookings",

  // 3. Talk to Growth / AI Expert (TalkToExpert.tsx)
  "talktoexpert": "Form_Expert_Consulting",
  "talk_to_expert": "Form_Expert_Consulting",
  "expert": "Form_Expert_Consulting",
  "expertconsulting": "Form_Expert_Consulting",
  "expert_consulting": "Form_Expert_Consulting",

  // 4. Profit Pool Discovery Diagnostic (DiscoveryPage.tsx)
  "diagnosticforms": "Form_Diagnostic_Assessments",
  "diagnostic_forms": "Form_Diagnostic_Assessments",
  "diagnostic": "Form_Diagnostic_Assessments",
  "diagnostics": "Form_Diagnostic_Assessments",
  "profitpooldiscovery": "Form_Diagnostic_Assessments",
  "profit_pool_discovery": "Form_Diagnostic_Assessments",
  "assessment": "Form_Diagnostic_Assessments",

  // 5. Partner Applications (Partners.tsx)
  "partners": "Form_Partner_Applications",
  "partner": "Form_Partner_Applications",
  "partnerapplications": "Form_Partner_Applications",
  "partner_applications": "Form_Partner_Applications",

  // 6. Career Applications (Career.tsx)
  "jobapplications": "Form_Career_Applications",
  "job_applications": "Form_Career_Applications",
  "careerapplications": "Form_Career_Applications",
  "career_applications": "Form_Career_Applications",
  "careers": "Form_Career_Applications",
  "career": "Form_Career_Applications",
  "jobs": "Form_Career_Applications",

  // 7. Chatbot Virtual Assistant (ChatBot.tsx)
  "chatbot": "Form_Chatbot_Conversations",
  "chatbotleads": "Form_Chatbot_Conversations",
  "chatbot_leads": "Form_Chatbot_Conversations",
  "chatbot_conversations": "Form_Chatbot_Conversations",

  // 8. Consolidated Master Form Submissions
  "formsubmissions": "Form_Submissions",
  "form_submissions": "Form_Submissions",
  "submissions": "Form_Submissions",

  // 12. User Registration & Auth Tracking
  "userregistration": "User_Registration",
  "user_registration": "User_Registration",
  "userregistrations": "User_Registration",
  "user_registrations": "User_Registration",
  "registration": "User_Registration",
  "registrations": "User_Registration",
  "signup": "User_Registration",
  "register": "User_Registration",

  // 13. Login Activity
  "loginactivity": "Login_Activity",
  "login_activity": "Login_Activity",
  "logins": "Login_Activity",
  "login": "Login_Activity",

  // 14. Calculator Activity
  "calculatoractivity": "Calculator_Activity",
  "calculator_activity": "Calculator_Activity",
  "calculators": "Calculator_Activity",
  "calculator": "Calculator_Activity"
};

/**
 * Intelligently finds a tab in the spreadsheet matching exact name, alias, or case-insensitive name.
 */
function findSheetFlexible(spreadsheet, requestedName) {
  if (!spreadsheet || !requestedName) return null;

  // 1. Direct exact match
  var sheet = spreadsheet.getSheetByName(requestedName);
  if (sheet) return sheet;

  // 2. Normalized alias match
  var norm = requestedName.toLowerCase().replace(/[\s\-_]/g, '');
  var canonical = SHEET_NAME_ALIASES[norm] || requestedName;
  sheet = spreadsheet.getSheetByName(canonical);
  if (sheet) return sheet;

  // 3. Normalized alias matching with space replacement
  var spacedCanonical = canonical.replace(/_/g, ' ');
  sheet = spreadsheet.getSheetByName(spacedCanonical);
  if (sheet) return sheet;

  // 4. Scan all tabs in spreadsheet and compare normalized names
  var allSheets = spreadsheet.getSheets();
  for (var i = 0; i < allSheets.length; i++) {
    var curName = allSheets[i].getName();
    var curNorm = curName.toLowerCase().replace(/[\s\-_]/g, '');
    if (curNorm === norm || curNorm === (canonical || '').toLowerCase().replace(/[\s\-_]/g, '')) {
      return allSheets[i];
    }
  }

  return null;
}

// =========================================================================================
// 3. MAIN WEBHOOK ENDPOINT (doPost)
// =========================================================================================

/**
 * GET Endpoint: Health check & Webhook verification
 */
function doGet(e) {
  if (e && e.parameter && e.parameter.action) {
    var getAction = e.parameter.action.toString().trim().toLowerCase();
    var ss = SpreadsheetApp.openById(CONFIG.MAIN_SPREADSHEET_ID);
    if (getAction === "verify_login" || getAction === "login") {
      var verifyResult = handleVerifyLogin(ss, e.parameter);
      return ContentService.createTextOutput(JSON.stringify(verifyResult)).setMimeType(ContentService.MimeType.JSON);
    }
    if (getAction === "check_user_exists") {
      var checkResult = handleCheckUserExists(ss, e.parameter);
      return ContentService.createTextOutput(JSON.stringify(checkResult)).setMimeType(ContentService.MimeType.JSON);
    }
  }

  var response = {
    status: "ok",
    service: "ProfitMachines Enterprise Webhook & Automation Engine",
    version: "V7.2-ULTRA-PRO",
    timestamp: new Date().toISOString(),
    spreadsheetId: CONFIG.MAIN_SPREADSHEET_ID,
    recipientEmails: EMAIL_CONFIG.salesEmails,
    replyTo: EMAIL_CONFIG.replyTo,
    website: EMAIL_CONFIG.website
  };
  return ContentService.createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

// =========================================================================================
// 3. MAIN WEBHOOK ENDPOINT (doPost)
// =========================================================================================

function doPost(e) {
  // Manual mode testing fallback
  if (!e || !e.postData || !e.postData.contents) {
    console.warn("Running in Manual Mode: Initializing Mock Payload for Testing...");
    e = {
      postData: {
        contents: JSON.stringify({
          form_name: "Inbound Leads",
          name: "Test Leader",
          email: "asmitha.int2027g3@gmail.com",
          company: "Enterprise AI Inc",
          phone: "+91 9513288612",
          message: "Manual test verification of lead engine and auto-responder.",
          timestamp: new Date().toISOString()
        })
      }
    };
  }

  try {
    var data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseErr) {
      return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Invalid JSON payload" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // 1. Unpack fields object if present (as sent by submitToSheet and api/submit)
    if (data.fields && typeof data.fields === "object") {
      Object.keys(data.fields).forEach(function(k) {
        if (data[k] === undefined) data[k] = data.fields[k];
      });
    }

    // Special Handlers: User Registration, Login Activity & Calculator Activity
    var action = (data.action || data.event || "").toString().trim().toLowerCase();

    if (action === "verify_login" || action === "login") {
      var ssLogin = SpreadsheetApp.openById(CONFIG.MAIN_SPREADSHEET_ID);
      var verifyResult = handleVerifyLogin(ssLogin, data);
      return ContentService.createTextOutput(JSON.stringify(verifyResult)).setMimeType(ContentService.MimeType.JSON);
    }

    if (action === "user_registration" || action === "register_user") {
      var ssReg = SpreadsheetApp.openById(CONFIG.MAIN_SPREADSHEET_ID);
      var regResult = handleUserRegistration(ssReg, data);
      return ContentService.createTextOutput(JSON.stringify(regResult)).setMimeType(ContentService.MimeType.JSON);
    }

    if (action === "login_activity" || action === "record_login") {
      var ssLog = SpreadsheetApp.openById(CONFIG.MAIN_SPREADSHEET_ID);
      var logResult = handleLoginActivity(ssLog, data);
      return ContentService.createTextOutput(JSON.stringify(logResult)).setMimeType(ContentService.MimeType.JSON);
    }

    if (action === "calculator_activity" || action === "record_calculator") {
      var ssCalc = SpreadsheetApp.openById(CONFIG.MAIN_SPREADSHEET_ID);
      var calcResult = handleCalculatorActivity(ssCalc, data);
      return ContentService.createTextOutput(JSON.stringify(calcResult)).setMimeType(ContentService.MimeType.JSON);
    }

    if (action === "check_user_exists") {
      var ssCheck = SpreadsheetApp.openById(CONFIG.MAIN_SPREADSHEET_ID);
      var checkResult = handleCheckUserExists(ssCheck, data);
      return ContentService.createTextOutput(JSON.stringify(checkResult)).setMimeType(ContentService.MimeType.JSON);
    }

    // 2. Extract user contact info
    var userEmail = (
      data.email || 
      data.Email || 
      data.workEmail || 
      data.work_email || 
      data["Work Email"] || 
      data["Corporate Email"] ||
      (data.fields && (data.fields.email || data.fields.Email || data.fields.workEmail || data.fields.work_email)) ||
      ""
    ).toString().trim();

    var userName = (
      data.name || 
      data.Name || 
      data.fullName || 
      data["Full Name"] || 
      (data.firstName ? (data.firstName + (data.lastName ? " " + data.lastName : "")) : "") ||
      (data.fields && (data.fields.name || data.fields.Name || data.fields.fullName)) ||
      "Enterprise Leader"
    ).toString().trim();

    // 3. Determine the targeted form or event type
    var rawFormName = (
      data.form_name || 
      data.formName || 
      data["Form Name"] || 
      data.tableOrFormName || 
      (data.fields && (data.fields.form_name || data.fields.formName || data.fields.tableOrFormName)) || 
      data.sheetName || 
      data.formType || 
      ""
    ).toString().trim();

    var typeOrTable = (data.table || data.type || data.event_type || "").toString().trim();

    var targetIdentifier = rawFormName || (typeOrTable !== "FORM_SUBMISSIONS" && typeOrTable !== "form" ? typeOrTable : "") || "Form_Submissions";
    var norm = targetIdentifier.toLowerCase().replace(/[\s\-_]/g, '');
    var canonicalName = SHEET_NAME_ALIASES[norm];

    if (!canonicalName) {
      if (norm.indexOf("inbound") !== -1 || norm.indexOf("lead") !== -1 || norm.indexOf("quick") !== -1 || norm.indexOf("contact") !== -1) {
        canonicalName = "Form_Inbound_Leads";
      } else if (norm.indexOf("consult") !== -1 || norm.indexOf("demo") !== -1 || norm.indexOf("booking") !== -1) {
        canonicalName = "Form_Consultation_Bookings";
      } else if (norm.indexOf("expert") !== -1 || norm.indexOf("talk") !== -1) {
        canonicalName = "Form_Expert_Consulting";
      } else if (norm.indexOf("diagnostic") !== -1 || norm.indexOf("discovery") !== -1 || norm.indexOf("assessment") !== -1 || norm.indexOf("leakage") !== -1) {
        canonicalName = "Form_Diagnostic_Assessments";
      } else if (norm.indexOf("partner") !== -1) {
        canonicalName = "Form_Partner_Applications";
      } else if (norm.indexOf("career") !== -1 || norm.indexOf("job") !== -1 || norm.indexOf("fellowship") !== -1 || norm.indexOf("resume") !== -1) {
        canonicalName = "Form_Career_Applications";
      } else if (norm.indexOf("chat") !== -1) {
        canonicalName = "Form_Chatbot_Conversations";
      } else if (norm.indexOf("pageview") !== -1 || norm.indexOf("traffic") !== -1) {
        canonicalName = "Page_Views";
      } else if (norm.indexOf("session") !== -1 || norm.indexOf("visitor") !== -1) {
        canonicalName = "Sessions";
      } else if (norm.indexOf("click") !== -1 || norm.indexOf("cta") !== -1 || norm.indexOf("event") !== -1) {
        canonicalName = "CTA_Clicks";
      } else {
        canonicalName = "Form_Submissions";
      }
    }

    // Special handler: Career profile video submission
    if (canonicalName === "Career_Video_Submission" || norm === "careervideosubmission") {
      var videoResult = handleCareerVideoSubmission(data);
      return ContentService.createTextOutput(videoResult.message).setMimeType(ContentService.MimeType.TEXT);
    }

    var LEAD_FORMS = [
      "Form_Inbound_Leads", "Form_Consultation_Bookings", "Form_Expert_Consulting",
      "Form_Diagnostic_Assessments", "Form_Partner_Applications", "Form_Career_Applications",
      "Form_Chatbot_Conversations", "Form_Submissions"
    ];

    var isLeadForm = (LEAD_FORMS.indexOf(canonicalName) !== -1) || (userEmail.indexOf("@") !== -1);

    // =====================================================================================
    // STEP 1: DISPATCH EMAILS & RESUME ATTACHMENTS (IMMEDIATE AUTO-RESPONDER)
    // =====================================================================================
    var emailSent = false;
    var emailResult = { sent: false, delivered: 0, failed: 0, driveLink: "", driveFileId: "", message: "" };

    if (isLeadForm) {
      try {
        var defaultSheetUrl = "https://docs.google.com/spreadsheets/d/" + CONFIG.MAIN_SPREADSHEET_ID;
        emailResult = sendLeadEmails(data, canonicalName, defaultSheetUrl, userEmail, userName) || emailResult;
        emailSent = !!emailResult.sent;
      } catch (emailErr) {
        console.error("❌ Failed to dispatch email in Step 1:", emailErr.toString());
      }
    }

    // =====================================================================================
    // STEP 2: LOG DATA TO GOOGLE SHEETS
    // =====================================================================================
    var rowSaved = false;
    try {
      var ss = SpreadsheetApp.openById(CONFIG.MAIN_SPREADSHEET_ID);

      if (isLeadForm) {
        // A) Write to the Dedicated Form Tab
        rowSaved = appendRowToSheet(ss, canonicalName, data, emailResult);

        // B) Also log to Master Form Submissions if not already Form_Submissions
        if (canonicalName !== "Form_Submissions") {
          appendRowToSheet(ss, "Form_Submissions", data, emailResult, canonicalName.replace(/_/g, ' '));
        }

        // C) Also record a high-value lead conversion event in Live_Traffic_Events
        appendMasterTelemetryRow(ss, data);
      } else {
        // Telemetry beacon (Page View, Visitor, Session, CTA Click)
        // A) Always write to Live_Traffic_Events (SCHEMA_95) so Sheet 2 builds all dashboards
        rowSaved = appendMasterTelemetryRow(ss, data);

        // B) Also write to the specific telemetry tab (Page_Views, Sessions, CTA_Clicks)
        if (canonicalName !== "Live_Traffic_Events") {
          appendRowToSheet(ss, canonicalName, data, emailResult);
        }
      }
    } catch (sheetErr) {
      console.warn("⚠️ Google Sheets logging error: " + sheetErr.toString());
    }

    var statusMsg = emailSent
      ? "Email Sent & Processed"
      : (rowSaved ? (emailResult.message ? "Saved (" + emailResult.message + ")" : "Saved") : "OK");

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: statusMsg,
      canonicalTab: canonicalName,
      userConfirmationSent: emailResult.delivered > 0,
      timestamp: new Date().toISOString()
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    console.error("doPost critical error:", err.toString());
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Appends a row to any specified tab in Sheet 1, creating and styling headers if missing.
 */
function appendRowToSheet(ss, tabKey, data, emailResult, formNameOverride) {
  try {
    var sheet = findSheetFlexible(ss, tabKey);
    var defaultHeaders = TAB_CONFIGS[tabKey];

    if (!sheet) {
      sheet = ss.insertSheet(tabKey);
      if (defaultHeaders && defaultHeaders.length > 0) {
        sheet.getRange(1, 1, 1, defaultHeaders.length)
             .setValues([defaultHeaders])
             .setFontWeight("bold")
             .setBackground("#0f172a")
             .setFontColor("#ffffff");
        sheet.setFrozenRows(1);
      }
    } else if (sheet.getLastRow() === 0 && defaultHeaders && defaultHeaders.length > 0) {
      sheet.getRange(1, 1, 1, defaultHeaders.length)
           .setValues([defaultHeaders])
           .setFontWeight("bold")
           .setBackground("#0f172a")
           .setFontColor("#ffffff");
      sheet.setFrozenRows(1);
    }

    var lastCol = Math.max(sheet.getLastColumn(), 1);
    var headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];

    var hasResumeBlob = !!(data.resumeBlob || data.resume || data.resumeBase64 || data.fileBlob || data.attachmentBlob);
    var newRow = headers.map(function(header) {
      if (header === "Form Name" && formNameOverride) {
        return formNameOverride;
      }
      if (header === "Resume Blob" || header === "resumeBlob") {
        return data.resumeDriveLink ? "Archived in Drive" : (hasResumeBlob ? "Attached to Email" : "None");
      }
      if (header === "Resume Drive Link" || header === "resumeDriveLink" || header === "Resume Link") {
        return data.resumeDriveLink || (emailResult ? emailResult.driveLink : "") || (hasResumeBlob ? "Attached to Email" : "None");
      }
      if (header === "Drive File ID" || header === "driveFileId") {
        return data.driveFileId || (emailResult ? emailResult.driveFileId : "") || "";
      }
      return resolveField(header, data);
    });

    // Dedup / Update for Sessions and Page_Views if necessary
    var shouldDedup = (tabKey === "Page_Views" || tabKey === "Sessions");
    var lastRow = sheet.getLastRow();
    var updated = false;

    if (shouldDedup && lastRow > 1 && data.sessionId) {
      var sessionCol = sheet.getRange(2, 1, lastRow - 1, 1).getValues().flat();
      var sIdx = sessionCol.lastIndexOf(data.sessionId);
      if (tabKey === "Sessions" && sIdx !== -1) {
        sheet.getRange(sIdx + 2, 1, 1, newRow.length).setValues([newRow]);
        updated = true;
      }
    }

    if (!updated) {
      sheet.appendRow(newRow);
    }
    return true;
  } catch (err) {
    console.warn("Could not append row to " + tabKey + ": " + err.toString());
    return false;
  }
}

/**
 * Appends a master 95-column telemetry row to Live_Traffic_Events
 */
function appendMasterTelemetryRow(ss, data) {
  try {
    var masterSheet = findSheetFlexible(ss, "Live_Traffic_Events");
    if (!masterSheet) {
      masterSheet = ss.insertSheet("Live_Traffic_Events", 0);
      masterSheet.getRange(1, 1, 1, SCHEMA_95_HEADERS.length)
                 .setValues([SCHEMA_95_HEADERS])
                 .setFontWeight("bold")
                 .setBackground("#060e22")
                 .setFontColor("#38bdf8")
                 .setHorizontalAlignment("center");
      masterSheet.setFrozenRows(1);
    } else if (masterSheet.getLastRow() === 0) {
      masterSheet.getRange(1, 1, 1, SCHEMA_95_HEADERS.length)
                 .setValues([SCHEMA_95_HEADERS])
                 .setFontWeight("bold")
                 .setBackground("#060e22")
                 .setFontColor("#38bdf8")
                 .setHorizontalAlignment("center");
      masterSheet.setFrozenRows(1);
    }

    var schema95Row = buildSchema95Row(data);
    masterSheet.appendRow(schema95Row);
    return true;
  } catch (tErr) {
    console.warn("Could not append to Live_Traffic_Events: " + tErr.toString());
    return false;
  }
}

/**
 * Maps raw incoming event or lead data into the comprehensive 95-column schema
 */
function buildSchema95Row(data) {
  var timestamp = normalizeTimestamp(data.timestamp || data.Timestamp || new Date().toISOString());
  var visitorId = data.visitor_id || data.visitorId || data.user_id || data.userId || "";
  var sessionId = data.session_id || data.sessionId || "";
  var pageUrl = data.page_url || data.pageUrl || data.page || data.pagePath || "";
  var pageTitle = data.page_title || data.pageTitle || "";
  var referrer = data.referrer || data.referrer_url || "";
  var trafficSource = computeAttributionSource(data);
  var utmSource = data.utm_source || data.utmSource || "";
  var utmMedium = data.utm_medium || data.utmMedium || "";
  var utmCampaign = data.utm_campaign || data.utmCampaign || "";
  var utmTerm = data.utm_term || data.utmTerm || "";
  var utmContent = data.utm_content || data.utmContent || "";
  var deviceType = data.device || data.device_type || "Desktop";
  var browser = data.browser || "";
  var os = data.os || data.operating_system || "";
  var ipAddress = data.ip_address || data.ipAddress || "127.0.0.1";
  var eventName = data.event_name || data.eventName || data.ctaName || "";
  var eventCategory = data.event_category || data.category || (data.type === "pageview" ? "PAGE_VIEW" : "INTERACTION");

  var explicitSchema95Map = {
    "ip_address": ipAddress,
    "geo_country": data.geo_country || data.country || "India",
    "geo_state": data.geo_state || data.state || "",
    "geo_city": data.geo_city || data.city || data.ipLocation || "",
    "geo_latitude": data.geo_latitude || "",
    "geo_longitude": data.geo_longitude || "",
    "user_id": visitorId,
    "user_name": data.name || data.Name || data.userName || "",
    "user_email": data.email || data.Email || data.userEmail || "",
    "user_type": data.user_type || "prospect",
    "returning_user": data.returning_user || false,
    "first_visit_timestamp": data.first_visit_timestamp || timestamp,
    "last_visit_timestamp": timestamp,
    "total_sessions": data.total_sessions || 1,
    "total_time_spent": data.total_time_spent || data.dwellTime || 0,
    "avg_session_duration": data.avg_session_duration || 0,
    "session_id": sessionId,
    "session_number": data.session_number || 1,
    "session_start_time": data.session_start_time || timestamp,
    "session_end_time": data.session_end_time || timestamp,
    "total_session_duration": data.total_session_duration || 0,
    "total_pages_visited": data.total_pages_visited || 1,
    "bounce": data.bounce || false,
    "traffic_source": trafficSource,
    "referrer_url": referrer,
    "campaign_name": utmCampaign,
    "utm_source": utmSource,
    "utm_medium": utmMedium,
    "utm_campaign": utmCampaign,
    "utm_term": utmTerm,
    "utm_content": utmContent,
    "page": pageUrl,
    "page_url": pageUrl,
    "previous_page": data.previous_page || "",
    "next_page": data.next_page || "",
    "entry_page": data.entry_page || pageUrl,
    "exit_page": data.exit_page || pageUrl,
    "page_title": pageTitle,
    "time_on_page": data.time_on_page || data.dwellTime || 0,
    "scroll_percentage": data.scroll_percentage || data.maxScrollDepth || 0,
    "max_scroll_depth": data.max_scroll_depth || data.maxScrollDepth || 0,
    "interaction_count": data.interaction_count || data.interactions || 0,
    "inactivity_time": data.inactivity_time || 0,
    "event_id": data.event_id || data.eventId || ("EVT_" + Date.now()),
    "event_name": eventName,
    "event_category": eventCategory,
    "event_action": data.event_action || "view",
    "event_label": data.event_label || data.element_text || "",
    "section": data.section || "General",
    "element_type": data.element_type || "button",
    "element_id": data.element_id || "",
    "element_class": data.element_class || "",
    "element_text": data.element_text || data.elementText || "",
    "click_position_x": data.click_position_x || 0,
    "click_position_y": data.click_position_y || 0,
    "form_id": data.form_id || data.form_name || data.formName || "",
    "form_field_name": data.form_field_name || "",
    "form_completion_status": data.form_completion_status || (data.email ? "completed" : "in_progress"),
    "form_abandonment": data.form_abandonment || false,
    "goal_name": data.goal_name || (data.email ? "lead_submission" : "page_view"),
    "goal_completed": data.goal_completed || (data.email ? true : false),
    "conversion_id": data.conversion_id || data.submission_id || "",
    "conversion_value": data.conversion_value || 0,
    "funnel_step": data.funnel_step || 1,
    "device_type": deviceType,
    "device_brand": data.device_brand || "",
    "device_model": data.device_model || "",
    "operating_system": os,
    "browser": browser,
    "browser_version": data.browser_version || "",
    "screen_width": data.screen_width || 1920,
    "screen_height": data.screen_height || 1080,
    "viewport_width": data.viewport_width || 1920,
    "viewport_height": data.viewport_height || 1080,
    "language": data.language || "en",
    "timezone": data.timezone || "Asia/Kolkata",
    "network_type": data.network_type || "4g",
    "connection_speed": data.connection_speed || "fast",
    "page_load_time": data.page_load_time || 0,
    "dom_load_time": data.dom_load_time || 0,
    "first_contentful_paint": data.first_contentful_paint || 0,
    "largest_contentful_paint": data.largest_contentful_paint || 0,
    "time_to_interactive": data.time_to_interactive || 0,
    "js_error_message": data.js_error_message || "",
    "api_error_message": data.api_error_message || "",
    "http_status_code": data.http_status_code || 200,
    "cpu_cores": data.cpu_cores || 8,
    "memory_size": data.memory_size || 16,
    "tab_visibility_status": data.tab_visibility_status || "visible",
    "back_button_used": data.back_button_used || false,
    "copy_event": data.copy_event || false,
    "paste_event": data.paste_event || false,
    "rage_click_detected": data.rage_click_detected || false,
    "user_segment": data.user_segment || "Enterprise Prospect",
    "timestamp": timestamp
  };

  return SCHEMA_95_HEADERS.map(function(col) {
    var val = explicitSchema95Map[col];
    return val !== undefined ? val : "";
  });
}


function escapeHtml(str) {
  return String(str == null ? "" : str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function uniqueEmails(list) {
  var seen = {};
  var out = [];
  (list || []).forEach(function(addr) {
    if (!addr || typeof addr !== "string") return;
    var clean = addr.trim().toLowerCase();
    if (!clean || clean.indexOf("@") === -1 || seen[clean]) return;
    seen[clean] = true;
    out.push(addr.trim());
  });
  return out;
}

function isEmailQuotaError(err) {
  var s = String(err || "").toLowerCase();
  return s.indexOf("too many times for one day") !== -1 ||
         s.indexOf("service invoked too many times") !== -1 ||
         s.indexOf("quota") !== -1 ||
         s.indexOf("limit exceeded") !== -1;
}

function getRemainingEmailQuota() {
  try {
    return MailApp.getRemainingDailyQuota();
  } catch (e) {
    return -1;
  }
}

function extractCleanBase64(raw) {
  if (raw && typeof raw !== "string" && raw.getBytes) {
    return null;
  }
  if (!raw || typeof raw !== "string") return null;
  var str = raw.trim();
  var commaIdx = str.indexOf("base64,");
  if (commaIdx !== -1) {
    str = str.substring(commaIdx + 7);
  } else if (str.indexOf("data:") === 0 && str.indexOf(",") !== -1) {
    str = str.split(",")[1];
  }
  str = str.replace(/[\r\n\s"']/g, "");
  str = str.replace(/-/g, "+").replace(/_/g, "/");
  str = str.replace(/=+$/, "");
  str = str.replace(/=/g, "");
  str = str.replace(/[^A-Za-z0-9+/]/g, "");
  while (str.length % 4 !== 0) {
    str += "=";
  }
  return str.length > 10 ? str : null;
}

function decodeBase64Bytes(cleanBase64) {
  if (!cleanBase64) return null;
  var attempts = [
    function() { return Utilities.base64Decode(cleanBase64); },
    function() { return Utilities.base64DecodeWebSafe(cleanBase64.replace(/\+/g, "-").replace(/\//g, "_")); }
  ];
  for (var i = 0; i < attempts.length; i++) {
    try {
      var bytes = attempts[i]();
      if (bytes && bytes.length > 0) return bytes;
    } catch (e) {
      if (i === attempts.length - 1) throw e;
    }
  }
  return null;
}

function getAttachmentBlobs(data, defaultName) {
  var attachments = [];
  if (!data || typeof data !== "object") return attachments;

  var rawPayload = data.resumeBlob || data.resume || data.resumeBase64 || data.fileBlob ||
                   data.attachmentBlob || data.attachment || data.ResumeBlob || data.Resume ||
                   data["Resume Blob"] || data.resume_blob || "";

  var candidateName = String(data.name || data.Name || data["Full Name"] || data.fullName || defaultName || "Candidate")
    .replace(/[^a-zA-Z0-9_\s]/g, "").trim() || "Candidate";
  var origFileName = data.resumeFileName || data.fileName || data.filename || data["Resume File Name"] ||
                     data.ResumeFileName || data.resumefilename || (candidateName + "_Resume.pdf");
  var cleanFileName = String(origFileName).replace(/[/\\?%*:|"<>]/g, "_").trim();
  if (!cleanFileName) cleanFileName = candidateName + "_Resume.pdf";

  var ext = "";
  var extMatch = cleanFileName.match(/\.([0-9a-zA-Z]+)$/i);
  if (extMatch) ext = extMatch[1].toLowerCase();
  var mimeMap = {
    "pdf": "application/pdf",
    "doc": "application/msword",
    "docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "png": "image/png",
    "jpg": "image/jpeg",
    "jpeg": "image/jpeg",
    "txt": "text/plain"
  };
  var mime = data.resumeMimeType || data.mimeType || data.ResumeMimeType || (ext ? mimeMap[ext] : null) || "application/pdf";

  if (rawPayload && typeof rawPayload !== "string" && rawPayload.getBytes) {
    try {
      attachments.push(Utilities.newBlob(rawPayload.getBytes(), mime, cleanFileName));
      return attachments;
    } catch (blobErr) {
      console.warn("Resume payload was a blob but could not be copied: " + blobErr.toString());
    }
  }

  var cleanBase64 = extractCleanBase64(rawPayload);
  if (!cleanBase64) return attachments;

  try {
    var decodedBytes = decodeBase64Bytes(cleanBase64);
    if (decodedBytes && decodedBytes.length > 0) {
      attachments.push(Utilities.newBlob(decodedBytes, mime, cleanFileName));
      console.log("📎 Resume decoded: " + cleanFileName + " (" + decodedBytes.length + " bytes, " + mime + ")");
    }
  } catch (err) {
    console.error("❌ Failed to decode resume attachment: " + err.toString());
  }
  return attachments;
}

function getOrCreateResumeFolder() {
  var folderName = CONFIG.CAREER_RESUMES_FOLDER_NAME || "ProfitMachines_Career_Resumes";
  var folders = DriveApp.getFoldersByName(folderName);
  if (folders.hasNext()) return folders.next();
  return DriveApp.createFolder(folderName);
}

function archiveResumeToDrive(attachments, data) {
  var result = { driveFileId: "", driveLink: "" };
  if (!attachments || attachments.length === 0) return result;
  try {
    var folder = getOrCreateResumeFolder();
    var file = folder.createFile(attachments[0].copyBlob());
    try {
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    } catch (shareErr) {
      console.warn("Resume Drive sharing could not be set: " + shareErr.toString());
    }
    result.driveFileId = file.getId();
    result.driveLink = file.getUrl();
    data.driveFileId = result.driveFileId;
    data.resumeDriveLink = result.driveLink;
    console.log("💾 Resume archived to Drive: " + result.driveLink);
  } catch (err) {
    console.error("❌ Drive resume archive failed: " + err.toString());
  }
  return result;
}

function sendEmailDirect(options) {
  if (!options || !options.to) {
    return { ok: false, error: "Missing recipient email" };
  }
  var to = String(options.to).trim();
  if (to.indexOf("@") === -1) {
    return { ok: false, error: "Invalid recipient address: " + to };
  }

  var plainBody = options.body || "Notification from ProfitMachines.";
  var htmlBody = options.htmlBody || plainBody;
  var subject = options.subject || "Notification - ProfitMachines";
  var senderName = options.name || EMAIL_CONFIG.name;
  var replyTo = options.replyTo || EMAIL_CONFIG.replyTo;
  var attachments = options.attachments || [];

  // Try MailApp first (Highest reliability for Apps Script Web App without mailbox authorization hurdles)
  try {
    MailApp.sendEmail({
      to: to,
      subject: subject,
      body: plainBody,
      htmlBody: htmlBody,
      name: senderName,
      replyTo: replyTo,
      attachments: attachments
    });
    return { ok: true, via: "MailApp" };
  } catch (mailErr) {
    console.warn("MailApp warning: " + mailErr.toString() + ". Attempting GmailApp fallback...");
    // Fallback to GmailApp if available
    try {
      GmailApp.sendEmail(to, subject, plainBody, {
        htmlBody: htmlBody,
        name: senderName,
        replyTo: replyTo,
        attachments: attachments
      });
      return { ok: true, via: "GmailApp" };
    } catch (gmailErr) {
      console.error("Both MailApp and GmailApp failed: " + mailErr.toString() + " | " + gmailErr.toString());
      return { ok: false, error: mailErr.toString() + " | " + gmailErr.toString() };
    }
  }
}

// Backward-compatibility alias
function sendEmailOnce(options) {
  return sendEmailDirect(options);
}

// =========================================================================================
// 5. ENHANCED EMAIL DISPATCHER (PROFIT MACHINES)
// =========================================================================================

/**
 * Dispatches notification emails with resume attachments exclusively to authorized team members.
 */
function sendLeadEmails(data, sheetName, spreadsheetUrl, extractedEmail, extractedName) {
  var result = {
    sent: false,
    delivered: 0,
    failed: 0,
    driveLink: "",
    driveFileId: "",
    quotaRemaining: getRemainingEmailQuota(),
    message: ""
  };

  var userEmail = (extractedEmail || data.email || data.Email || data["Work Email"] || data.workEmail || data["work_email"] || (data.fields && (data.fields.email || data.fields.Email)) || "").toString().trim();
  var userName  = (extractedName || data.name || data.Name || data["Full Name"] || data.fullName || (data.firstName ? (data.firstName + (data.lastName ? " " + data.lastName : "")) : "") || "Valued Enterprise Client").toString().trim();
  
  var leadMeta = getLeadCategoryMeta(sheetName, data);
  var attachments = getAttachmentBlobs(data, userName);
  var driveMeta = archiveResumeToDrive(attachments, data);
  result.driveLink = driveMeta.driveLink;
  result.driveFileId = driveMeta.driveFileId;

  var subjectUser = leadMeta.userSubject;
  var htmlUser = buildUserConfirmationHtml(userName, leadMeta.categoryName, leadMeta.userMessage, leadMeta.leadPhone || data.phone || data.Phone);
  var subjectInternal = leadMeta.internalSubject;
  var htmlInternal = buildInternalLeadHtml(leadMeta, data, spreadsheetUrl);

  var isTest = data.testMode === true || data.isInternalTest === true || data.testMode === "true";

  // Target team recipients: STRICTLY poojasri@trustgrid.ai and asmitha.int2027g3@gmail.com
  var targetRecipients = isTest ? [userEmail || EMAIL_CONFIG.salesEmails[0]] : (leadMeta.recipients || EMAIL_CONFIG.salesEmails);

  // 1. DISPATCH USER CONFIRMATION IMMEDIATELY TO THE USER
  if (userEmail && userEmail.indexOf("@") !== -1 && userEmail.indexOf(".") !== -1 && !isTest) {
    try {
      var plainTextUser = "Dear " + userName + ",\n\n" +
        "Thank you for contacting ProfitMachines.\n\n" +
        "We have received your submission for: " + leadMeta.categoryName + ".\n\n" +
        leadMeta.userMessage + "\n\n" +
        (leadMeta.leadPhone ? ("Executive Contact Phone: " + leadMeta.leadPhone + "\n") : "") +
        "Official Website: " + EMAIL_CONFIG.website + "\n" +
        "Inquiries: " + EMAIL_CONFIG.replyTo + "\n\n" +
        "Warm regards,\n" +
        "The ProfitMachines Leadership Team";

      var userSend = sendEmailDirect({
        to: userEmail,
        subject: subjectUser,
        body: plainTextUser,
        htmlBody: htmlUser,
        name: EMAIL_CONFIG.name,
        replyTo: EMAIL_CONFIG.replyTo
      });

      if (userSend.ok) {
        result.delivered++;
        console.log("✅ [User Auto-Responder] Sent confirmation to: " + userEmail + " via " + userSend.via);
        if (sheetName === "Form_Career_Applications" || sheetName === "Career_Applications") {
          sendCareerVideoRequestEmail(userEmail, userName);
        }
      } else {
        result.failed++;
        console.error("❌ [User Auto-Responder] Failed to send to " + userEmail + ": " + userSend.error);
      }
    } catch (uErr) {
      console.error("❌ [User Auto-Responder] Exception: " + uErr.toString());
    }
  }

  // 2. DISPATCH INTERNAL ALERT TO POOJASRI & ASMITHA
  if (targetRecipients.length > 0) {
    try {
      var recipientBlobs = [];
      if (attachments && attachments.length > 0) {
        recipientBlobs = attachments.map(function(blob) {
          try {
            return Utilities.newBlob(blob.getBytes(), blob.getContentType(), blob.getName());
          } catch (bErr) {
            return blob;
          }
        });
      }

      var driveNote = data.resumeDriveLink
        ? "\nResume Drive copy: " + data.resumeDriveLink
        : (recipientBlobs.length ? "" : "\n(No resume attachment)");
      var plainTextBody = "PROFIT MACHINES - NEW LEAD ALERT\n" +
        "---------------------------------------\n" +
        "Form: " + leadMeta.categoryName + " (" + sheetName + ")\n" +
        "Name: " + userName + "\n" +
        "Email: " + (userEmail || "N/A") + "\n" +
        "Phone: " + (data.phone || data.Phone || "N/A") + "\n" +
        "Company: " + (data.company || data.organization || "N/A") + "\n" +
        "Traffic Source: " + computeAttributionSource(data) + "\n" +
        "Details: " + (data.message || data.requirement || "New Submission") + "\n" +
        "Timestamp: " + normalizeTimestamp(data.timestamp || new Date().toISOString()) + "\n" +
        "Spreadsheet: " + spreadsheetUrl + "\n" +
        driveNote;

      var mailOptions = {
        to: targetRecipients.join(","),
        subject: (isTest ? "[TEST] " : "") + subjectInternal,
        body: plainTextBody,
        htmlBody: htmlInternal,
        name: EMAIL_CONFIG.name,
        replyTo: (userEmail && userEmail.indexOf("@") !== -1) ? userEmail : EMAIL_CONFIG.replyTo
      };
      if (recipientBlobs.length > 0) {
        mailOptions.attachments = recipientBlobs;
      }

      var teamSend = sendEmailDirect(mailOptions);
      if (teamSend.ok) {
        result.delivered++;
        result.sent = true;
        console.log("✅ [Internal Alert] Successfully sent via " + teamSend.via + " to: " + mailOptions.to);
      } else {
        result.failed++;
        result.message = teamSend.error || "internal email failed";
        console.error("❌ [Internal Alert] Failed: " + teamSend.error);
      }
    } catch (teamErr) {
      console.error("❌ [Internal Alert] Exception: " + teamErr.toString());
    }
  }

  if (!result.sent && result.delivered > 0) result.sent = true;
  return result;
}

/**
 * Returns customized category labels, badges, recipient lists, and subject lines for Profit Machines.
 */
function getLeadCategoryMeta(sheetName, data) {
  var name = (data.name || data.Name || data["Full Name"] || data.fullName || (data.firstName ? (data.firstName + (data.lastName ? " " + data.lastName : "")) : "") || "").trim();
  var company = (data.company || data.Company || data.companyName || data["Company Name"] || data.organization || "").trim();
  var role = (data.jobTitle || data["Job Title"] || data.designation || data.role || "").trim();
  var phone = (data.phone || data.Phone || data["Phone Number"] || data.phoneNumber || "").trim();
  var interest = (data.interest || data.service || data.transformationInterest || "").trim();

  // Normalize sheetName for flexible matching
  var norm = (sheetName || "").toLowerCase().replace(/[\s\-_]/g, '');

  if (norm.indexOf("inbound") !== -1 || norm.indexOf("lead") !== -1 || norm.indexOf("quick") !== -1 || norm.indexOf("contact") !== -1) {
    return {
      categoryName: "Inbound Lead",
      badgeText: "INBOUND LEAD",
      badgeBg: "#2563eb",
      badgeColor: "#ffffff",
      leadName: name || "Enterprise Leader",
      leadCompany: company || "Enterprise Organization",
      leadPhone: phone,
      internalSubject: "[ProfitMachines Lead] " + (company ? company + " - " + name : name || "New Enterprise Inbound Lead"),
      userSubject: "ProfitMachines - Thank You for Your Inquiry",
      userMessage: "Thank you for reaching out to ProfitMachines. We have received your inquiry (" + (interest || "Enterprise AI Acceleration") + ") and our enterprise consulting team is reviewing your requirements. A senior partner will reach out to you shortly.",
      recipients: EMAIL_CONFIG.salesEmails
    };
  }

  if (norm.indexOf("consult") !== -1 || norm.indexOf("demo") !== -1 || norm.indexOf("booking") !== -1) {
    return {
      categoryName: "Consultation Booking",
      badgeText: "CONSULTATION BOOKING",
      badgeBg: "#4f46e5",
      badgeColor: "#ffffff",
      leadName: name || "Executive Client",
      leadCompany: company || "Enterprise Organization",
      leadPhone: phone,
      internalSubject: "[ProfitMachines Consultation] " + (company ? company + " - " + name : name || "New Consultation Booking"),
      userSubject: "ProfitMachines - Consultation Request Received",
      userMessage: "Thank you for scheduling an Enterprise AI & Revenue Consultation with ProfitMachines. Our Principal AI Architect is reviewing your transformation scope and will confirm your session shortly.",
      recipients: EMAIL_CONFIG.salesEmails
    };
  }

  if (norm.indexOf("expert") !== -1 || norm.indexOf("talk") !== -1) {
    return {
      categoryName: "Talk to Expert",
      badgeText: "EXPERT CONSULTATION",
      badgeBg: "#0d9488",
      badgeColor: "#ffffff",
      leadName: name || "Engineering Leader",
      leadCompany: company || "Technology Team",
      leadPhone: phone,
      internalSubject: "[ProfitMachines Expert Call] " + (company ? company + " - " + name : name || "New Expert Consultation"),
      userSubject: "ProfitMachines - Expert Session Request Received",
      userMessage: "Thank you for requesting to speak with our AI & Forward Deployed Engineering specialists. We will review your domain context and connect with you within 24 hours.",
      recipients: EMAIL_CONFIG.salesEmails
    };
  }

  if (norm.indexOf("diagnostic") !== -1 || norm.indexOf("discovery") !== -1 || norm.indexOf("assessment") !== -1 || norm.indexOf("leakage") !== -1) {
    return {
      categoryName: "Diagnostic Assessment",
      badgeText: "PROFIT DIAGNOSTIC",
      badgeBg: "#7c3aed",
      badgeColor: "#ffffff",
      leadName: name || "Strategic Leader",
      leadCompany: company || "Enterprise Enterprise",
      leadPhone: phone,
      internalSubject: "[ProfitMachines Diagnostic] " + (company ? company + " - " + name : name || "New Profit Pool Diagnostic"),
      userSubject: "ProfitMachines - Profit Pool Diagnostic Received",
      userMessage: "Thank you for completing the Profit Pool Discovery Diagnostic. Our analytical engineering team has received your parameters and will deliver your custom revenue leakage analysis.",
      recipients: EMAIL_CONFIG.salesEmails
    };
  }

  if (norm.indexOf("partner") !== -1) {
    return {
      categoryName: "Partner Application",
      badgeText: "PARTNER APPLICATION",
      badgeBg: "#a855f7",
      badgeColor: "#ffffff",
      leadName: name || "Partner Representative",
      leadCompany: company || "Partner Firm",
      leadPhone: phone,
      internalSubject: "[ProfitMachines Partner] " + (company ? company + " - " + name : name || "New Strategic Partner"),
      userSubject: "ProfitMachines - Partner Application Received",
      userMessage: "Thank you for your interest in the ProfitMachines Partner Ecosystem. Our Strategic Alliances team will review your application and reach out promptly.",
      recipients: EMAIL_CONFIG.salesEmails
    };
  }

  if (norm.indexOf("career") !== -1 || norm.indexOf("job") !== -1 || norm.indexOf("fellowship") !== -1) {
    return {
      categoryName: "Career Application",
      badgeText: "CAREER APPLICATION",
      badgeBg: "#059669",
      badgeColor: "#ffffff",
      leadName: name || "Candidate Applicant",
      leadCompany: role || "Engineering Candidate",
      leadPhone: phone,
      internalSubject: "[ProfitMachines Career] " + (name || "Applicant") + " - " + (role || "AI Engineer"),
      userSubject: "ProfitMachines - Application Received",
      userMessage: "Thank you for applying to join ProfitMachines. Our Talent Acquisition & Research team is reviewing your profile and credentials.",
      recipients: EMAIL_CONFIG.careerEmails
    };
  }

  if (norm.indexOf("chat") !== -1) {
    return {
      categoryName: "Chatbot Inquiry",
      badgeText: "CHATBOT INQUIRY",
      badgeBg: "#0284c7",
      badgeColor: "#ffffff",
      leadName: name || "Chatbot Visitor",
      leadCompany: company || "Website Inquirer",
      leadPhone: phone,
      internalSubject: "[ProfitMachines Chat] " + (name || "Visitor") + (company ? " (" + company + ")" : ""),
      userSubject: "ProfitMachines - Thank You for Connecting",
      userMessage: "Thank you for chatting with the ProfitMachines virtual assistant. A member of our enterprise team will follow up on your specific inquiry.",
      recipients: EMAIL_CONFIG.salesEmails
    };
  }

  // Default fallback for any other form submission
  return {
    categoryName: "Website Inquiry",
    badgeText: "INBOUND INQUIRY",
    badgeBg: "#2563eb",
    badgeColor: "#ffffff",
    leadName: name || "Website Visitor",
    leadCompany: company || "Enterprise Organization",
    leadPhone: phone,
    internalSubject: "[ProfitMachines Lead] " + (name ? name + (company ? " (" + company + ")" : "") : "New Web Lead"),
    userSubject: "ProfitMachines - Inquiry Received",
    userMessage: "Thank you for reaching out to ProfitMachines. Our solutions team has received your inquiry and will respond within 24 hours.",
    recipients: EMAIL_CONFIG.salesEmails
  };
}

// =========================================================================================
// 6. MODERN EXECUTIVE HTML EMAIL TEMPLATES (PROFIT MACHINES BRANDING)
// =========================================================================================

/**
 * Builds a modern, high-conversion executive HTML email for internal team alerts.
 */
function buildInternalLeadHtml(meta, data, spreadsheetUrl) {
  var phone = data.phone || data.Phone || data["Phone Number"] || data.phoneNumber || "";
  var email = data.email || data.Email || data["Work Email"] || data.workEmail || "";
  var name  = data.name || data.Name || data["Full Name"] || data.fullName || "Prospective Client / Partner";
  var location = data.location || data.ipLocation || data["IP Location"] || data["City"] || "Global";
  var timestamp = normalizeTimestamp(data.timestamp || data.Timestamp);
  var resumeName = data.resumeFileName || data.fileName || data["Resume File Name"] || "";
  var coverLetter = data.coverLetter || data["Cover Letter"] || "";
  var jobTitle = data.jobTitle || data["Job Title"] || data.designation || meta.leadCompany || "";

  var seenKeys = {};
  var formRows = "";
  var utmRows = "";

  function normalizeKey(k) {
    return k.toLowerCase().replace(/[\s\-_]/g, '');
  }

  var ignoredKeys = [
    "sheetname", "resumeblob", "resumemimetype", "targetemail", "notifyemail", "emailto",
    "drivefileid", "resumedrivelink", "resume", "resumebase64", "fileblob", "attachmentblob", "attachment",
    "testmode", "isinternaltest"
  ];

  for (var rawKey in data) {
    var normKey = normalizeKey(rawKey);
    if (ignoredKeys.indexOf(normKey) !== -1) continue;
    if (seenKeys[normKey]) continue;
    
    var val = data[rawKey];
    if (val === undefined || val === null || val === "" || typeof val === "object") continue;

    seenKeys[normKey] = true;

    var isUtm = normKey.indexOf("utm") !== -1;
    var prettyKey = rawKey.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); }).replace(/_/g, ' ').trim();

    if (normKey === "submissionid") prettyKey = "Submission ID";
    if (normKey === "workemail") prettyKey = "Work Email";
    if (normKey === "companyname") prettyKey = "Company Name";
    if (normKey === "primaryaistack") prettyKey = "Primary AI Stack";
    if (normKey === "governancepriority") prettyKey = "Governance Priority";
    if (normKey === "ipaddress") prettyKey = "IP Address";

    var valStr = escapeHtml(String(val)).replace(/\n/g, "<br>");

    if (isUtm) {
      utmRows += '<div style="margin-bottom:6px;font-size:12px;color:#334155;">' +
                 '<strong style="color:#0f172a;">' + prettyKey + ':</strong> ' +
                 '<span style="background:#e2e8f0;padding:2px 8px;border-radius:4px;font-family:monospace;">' + valStr + '</span></div>';
    } else {
      formRows += '<tr>' +
                  '<td style="padding:10px 14px;border-bottom:1px solid #f1f5f9;font-weight:600;color:#64748b;font-size:13px;width:35%;vertical-align:top;">' + prettyKey + '</td>' +
                  '<td style="padding:10px 14px;border-bottom:1px solid #f1f5f9;color:#0f172a;font-size:13px;font-weight:500;">' + valStr + '</td>' +
                  '</tr>';
    }
  }

  // Action Buttons
  var actionButtons = '<div style="margin-top:25px;">';
  if (email) {
    actionButtons += '<a href="mailto:' + email + '?subject=Re: ' + encodeURIComponent(meta.categoryName + ' - Profit Machines') + '" style="background:#6366f1;color:#ffffff;text-decoration:none;padding:10px 18px;border-radius:8px;font-weight:bold;font-size:13px;display:inline-block;margin-right:8px;margin-bottom:8px;">Reply to Prospect</a>';
  }
  if (phone) {
    actionButtons += '<a href="tel:' + phone + '" style="background:#0f172a;color:#ffffff;text-decoration:none;padding:10px 18px;border-radius:8px;font-weight:bold;font-size:13px;display:inline-block;margin-right:8px;margin-bottom:8px;">Call ' + phone + '</a>';
  }
  if (spreadsheetUrl) {
    actionButtons += '<a href="' + spreadsheetUrl + '" target="_blank" style="background:#334155;color:#ffffff;text-decoration:none;padding:10px 18px;border-radius:8px;font-weight:bold;font-size:13px;display:inline-block;margin-bottom:8px;margin-right:8px;">Open Google Sheet</a>';
  }
  if (data.resumeDriveLink) {
    actionButtons += '<a href="' + escapeHtml(data.resumeDriveLink) + '" target="_blank" style="background:#059669;color:#ffffff;text-decoration:none;padding:10px 18px;border-radius:8px;font-weight:bold;font-size:13px;display:inline-block;margin-bottom:8px;">View Resume in Drive</a>';
  }
  actionButtons += '</div>';

  var resumeAttachmentNotice = "";
  var driveLink = data.resumeDriveLink || data.driveLink || "";
  if (resumeName || data.resumeBlob || driveLink) {
    var driveBtn = driveLink
      ? '<div style="margin-top:6px;"><a href="' + escapeHtml(driveLink) + '" target="_blank" style="color:#059669;font-weight:700;font-size:12px;">Open resume in Google Drive</a></div>'
      : '<div style="color:#059669;font-size:12px;margin-top:2px;">Download from email attachments.</div>';
    resumeAttachmentNotice =
      '<div style="background:#ecfdf5;border:1px solid #a7f3d0;border-radius:8px;padding:12px 16px;margin-bottom:20px;">' +
      '  <div style="font-weight:700;color:#065f46;font-size:13px;">Candidate Resume Attached</div>' +
      '  <div style="color:#047857;font-size:12px;margin-top:2px;"><strong>Document:</strong> ' + escapeHtml(resumeName || 'Candidate_Resume.pdf') + '</div>' +
      driveBtn +
      '</div>';
  }

  var coverLetterSection = "";
  if (coverLetter) {
    coverLetterSection = 
      '<div style="margin-bottom:20px;padding:16px;background:#f8fafc;border-left:4px solid #6366f1;border-radius:4px;">' +
      '  <h4 style="margin:0 0 6px 0;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;color:#4338ca;font-weight:700;">Candidate Cover Letter</h4>' +
      '  <div style="font-size:13px;color:#334155;line-height:1.6;font-style:italic;">"' + escapeHtml(String(coverLetter)).replace(/\n/g, '<br>') + '"</div>' +
      '</div>';
  }

  var utmSection = utmRows ? (
    '<div style="margin-top:20px;padding:15px;background:#f8fafc;border-radius:10px;border:1px solid #e2e8f0;">' +
    '<h4 style="margin:0 0 10px 0;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;color:#64748b;">Campaign Attribution &amp; Traffic Context</h4>' +
    utmRows +
    '</div>'
  ) : '';

  return [
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
    '  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">',
    '  <meta charset="utf-8">',
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0">',
    '</head>',
    '<body style="font-family: \'Segoe UI\', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 25px 15px;">',
    '  <div style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 14px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">',
    '    ',
    '    <!-- HEADER -->',
    '    <div style="background: linear-gradient(135deg, #090d16 0%, #1e1b4b 50%, #312e81 100%); padding: 30px 25px; color: #ffffff;">',
    '      <div style="display: inline-block; background: ' + meta.badgeBg + '; color: ' + meta.badgeColor + '; font-size: 11px; font-weight: 800; padding: 4px 12px; border-radius: 20px; letter-spacing: 0.06em; margin-bottom: 12px;">',
    '        ' + meta.badgeText,
    '      </div>',
    '      <h2 style="margin: 0; font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: -0.02em;">' + meta.categoryName + '</h2>',
    '      <p style="margin: 6px 0 0 0; color: #a5b4fc; font-size: 13px;">Captured live from PROFIT MACHINES Platform</p>',
    '    </div>',
    '',
    '    <!-- SUMMARY CARD -->',
    '    <div style="padding: 25px 25px 10px 25px;">',
    '      <div style="background: #f8fafc; border-left: 4px solid #6366f1; border-radius: 8px; padding: 16px 20px; margin-bottom: 20px;">',
    '        <div style="font-size: 18px; font-weight: 700; color: #0f172a;">' + escapeHtml(name) + '</div>',
    '        <div style="color: #475569; font-size: 14px; margin-top: 4px;">' + (jobTitle ? escapeHtml(jobTitle) + ' &bull; ' : '') + escapeHtml(location) + '</div>',
    '        <div style="color: #64748b; font-size: 12px; margin-top: 6px;">' + timestamp + '</div>',
    '      </div>',
    '',
    '      <!-- RESUME ATTACHMENT BANNER -->',
    '      ' + resumeAttachmentNotice,
    '',
    '      <!-- COVER LETTER (IF PROVIDED) -->',
    '      ' + coverLetterSection,
    '',
    '      <!-- FORM DATA TABLE -->',
    '      <h4 style="margin: 0 0 10px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: #4338ca; font-weight: 700;">Submission Parameters</h4>',
    '      <table style="width: 100%; border-collapse: collapse; border: 1px solid #f1f5f9; border-radius: 8px; overflow: hidden;">',
    '        <tbody>' + formRows + '</tbody>',
    '      </table>',
    '',
    '      <!-- UTM CONTEXT -->',
    '      ' + utmSection,
    '',
    '      <!-- ACTION BUTTONS -->',
    '      ' + actionButtons,
    '    </div>',
    '',
    '    <!-- FOOTER -->',
    '    <div style="background: #f8fafc; padding: 20px 25px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8; text-align: center; line-height: 1.5;">',
    '      &copy; ' + new Date().getFullYear() + ' PROFIT MACHINES. All rights reserved.<br>',
    '      Direct Inquiries: <strong>asmitha.int2027g3@gmail.com</strong><br>',
    '      Confidential Notification &bull; Distributed to authorized Profit Machines team members only.',
    '    </div>',
    '  </div>',
    '</body>',
    '</html>'
  ].join('\n');
}

/**
 * Normalizes a phone number to wa.me format, defaulting to India's country code for bare
 * 10-digit mobile numbers (matches components/ui/whatsapp-cta.tsx's number format).
 */
function formatWhatsAppNumber(num) {
  var digits = String(num || "").replace(/[^0-9]/g, "");
  if (digits.length === 10) digits = "91" + digits;
  return digits;
}

/**
 * Builds a branded, professional auto-confirmation email for end-users.
 */
function buildUserConfirmationHtml(name, categoryName, messageStr, phone) {
  var isQuickOrConsulting = (categoryName === "Quick Forms" || categoryName === "Consulting Sessions");
  var contactRecapSection = "";
  if (isQuickOrConsulting) {
    var waNumber = formatWhatsAppNumber(EMAIL_CONFIG.whatsappNumber);
    var waText = encodeURIComponent("Hi Profit Machines team, following up on my request (" + name + ").");
    var waUrl = "https://wa.me/" + waNumber + "?text=" + waText;
    contactRecapSection = [
      '<div style="background: #1f2937; padding: 20px; border-radius: 10px; border: 1px solid #374151; margin: 25px 0;">',
      '  <h3 style="color: #f3f4f6; font-size: 15px; margin: 0 0 12px 0; font-weight: 700;">We\'ve Got Your Details</h3>',
      '  <table style="width:100%;font-size:13px;color:#d1d5db;border-collapse:collapse;">',
      '    <tr><td style="padding:4px 0;color:#9ca3af;width:40%;">Name</td><td style="padding:4px 0;font-weight:700;color:#f3f4f6;">' + escapeHtml(name) + '</td></tr>',
      (phone ? '    <tr><td style="padding:4px 0;color:#9ca3af;">Mobile Number</td><td style="padding:4px 0;font-weight:700;color:#f3f4f6;">' + escapeHtml(phone) + '</td></tr>' : ''),
      '    <tr><td style="padding:4px 0;color:#9ca3af;">Expected Response</td><td style="padding:4px 0;font-weight:700;color:#f3f4f6;">Within 24 hours</td></tr>',
      '  </table>',
      '  <p style="font-size:13px;color:#9ca3af;margin:12px 0 0 0;">Our team will contact you soon &mdash; for a faster reply, message us directly:</p>',
      '  <div style="text-align:center;margin-top:14px;">',
      '    <a href="' + waUrl + '" target="_blank" style="display:inline-block;background:#25D366;color:#ffffff;text-decoration:none;padding:11px 22px;border-radius:8px;font-weight:700;font-size:13px;">Chat on WhatsApp</a>',
      '  </div>',
      (categoryName === "Consulting Sessions" ? (
        '  <div style="text-align:center;margin-top:12px;">' +
        '    <a href="' + EMAIL_CONFIG.consultingCalendarUrl + '" target="_blank" style="display:inline-block;background:#6366f1;color:#ffffff;text-decoration:none;padding:11px 22px;border-radius:8px;font-weight:700;font-size:13px;">Book a Calendar Slot</a>' +
        '  </div>'
      ) : ''),
      '</div>'
    ].join('\n');
  }

  return [
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
    '  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">',
    '  <meta charset="utf-8">',
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0">',
    '</head>',
    '<body style="font-family: \'Segoe UI\', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif; background-color: #0b0f19; margin: 0; padding: 25px 15px;">',
    '  <div style="max-width: 600px; margin: 0 auto; background: #111827; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.4); border: 1px solid #1f2937;">',
    '    ',
    '    <!-- HEADER -->',
    '    <div style="background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%); padding: 35px 25px; text-align: center;">',
    '      <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 0.05em;">PROFIT MACHINES</h1>',
    '      <p style="color: #a5b4fc; margin: 8px 0 0 0; font-size: 13px; font-weight: 500;">Enterprise AI Governance & Agentic Trust Platform</p>',
    '    </div>',
    '',
    '    <!-- CONTENT -->',
    '    <div style="padding: 35px 30px; color: #e5e7eb; line-height: 1.6;">',
    '      <h2 style="font-size: 20px; color: #818cf8; font-weight: 700; margin: 0 0 15px 0;">Hello ' + escapeHtml(name) + ',</h2>',
    '      <p style="font-size: 15px; color: #d1d5db; margin: 0 0 20px 0;">' + escapeHtml(messageStr) + '</p>',
    '      ' + contactRecapSection,
    '      ',
    '      <!-- PILLARS -->',
    '      <div style="background: #1f2937; padding: 20px; border-radius: 10px; border: 1px solid #374151; margin: 25px 0;">',
    '        <h3 style="color: #f3f4f6; font-size: 15px; margin: 0 0 12px 0; font-weight: 700;">Why Enterprises Choose PROFIT MACHINES:</h3>',
    '        <ul style="padding-left: 20px; margin: 0; font-size: 13px; color: #9ca3af; line-height: 1.7;">',
    '          <li><strong>Autonomous Agent Governance:</strong> Continuous real-time audit logs, intent verification & circuit breakers.</li>',
    '          <li><strong>Adversarial LLM Red Teaming:</strong> Automated penetration testing against prompt injection & data leakage.</li>',
    '          <li><strong>Regulatory Compliance Engine:</strong> Automated mapping to EU AI Act, ISO 42001, and NIST AI RMF.</li>',
    '          <li><strong>Custom Enterprise Guardrails:</strong> Sub-millisecond policy enforcement with zero latency overhead.</li>',
    '        </ul>',
    '      </div>',
    '',
    '      <div style="text-align: center; margin-top: 30px;">',
    '        <a href="' + (EMAIL_CONFIG.website || '#') + '" style="display: inline-block; padding: 13px 30px; background: #6366f1; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 14px; box-shadow: 0 4px 12px rgba(99,102,241,0.3);">Explore Profit Machines Architecture</a>',
    '      </div>',
    '    </div>',
    '',
    '    <!-- FOOTER -->',
    '    <div style="background: #0d1117; padding: 20px 25px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #1f2937; line-height: 1.5;">',
    '      &copy; ' + new Date().getFullYear() + ' PROFIT MACHINES. All rights reserved.<br>',
    '      Direct Architect & Support: <strong>asmitha.int2027g3@gmail.com</strong>',
    '    </div>',
    '  </div>',
    '</body>',
    '</html>'
  ].join('\n');
}

/**
 * Builds the "next step" email asking a career applicant to record and submit a profile video.
 */
function buildCareerVideoRequestHtml(name) {
  return [
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
    '  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">',
    '  <meta charset="utf-8">',
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0">',
    '</head>',
    '<body style="font-family: \'Segoe UI\', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif; background-color: #0b0f19; margin: 0; padding: 25px 15px;">',
    '  <div style="max-width: 600px; margin: 0 auto; background: #111827; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.4); border: 1px solid #1f2937;">',
    '    <div style="background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%); padding: 35px 25px; text-align: center;">',
    '      <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 0.05em;">PROFIT MACHINES CAREERS</h1>',
    '      <p style="color: #a5b4fc; margin: 8px 0 0 0; font-size: 13px; font-weight: 500;">Next Step: Candidate Profile Video</p>',
    '    </div>',
    '    <div style="padding: 35px 30px; color: #e5e7eb; line-height: 1.6;">',
    '      <h2 style="font-size: 20px; color: #818cf8; font-weight: 700; margin: 0 0 15px 0;">Hi ' + escapeHtml(name) + ',</h2>',
    '      <p style="font-size: 15px; color: #d1d5db; margin: 0 0 20px 0;">Thanks again for applying to Profit Machines. As the next step in your application, please record a short profile video introducing yourself.</p>',
    '      <div style="background: #1f2937; padding: 20px; border-radius: 10px; border: 1px solid #374151; margin: 25px 0;">',
    '        <h3 style="color: #f3f4f6; font-size: 15px; margin: 0 0 12px 0; font-weight: 700;">How to record & submit</h3>',
    '        <ul style="padding-left: 20px; margin: 0; font-size: 13px; color: #9ca3af; line-height: 1.8;">',
    '          <li>Record a <strong>15&ndash;20 minute</strong> video using your laptop camera &amp; mic, introducing yourself, your experience, and why you want to join Profit Machines.</li>',
    '          <li>Upload the video to <strong>Google Drive</strong> and set sharing to &ldquo;Anyone with the link &ndash; Viewer&rdquo;.</li>',
    '          <li>Copy the shareable link and <strong>reply to this email</strong> with the link so our Talent team can review it and attach it to your application.</li>',
    '        </ul>',
    '      </div>',
    '      <p style="font-size: 13px; color: #9ca3af; margin: 0;">Once received, your video link will be logged against your application in our tracking sheet.</p>',
    '    </div>',
    '    <div style="background: #0d1117; padding: 20px 25px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #1f2937; line-height: 1.5;">',
    '      &copy; ' + new Date().getFullYear() + ' PROFIT MACHINES. All rights reserved.<br>',
    '      Direct Talent Team Contact: <strong>asmitha.int2027g3@gmail.com</strong>',
    '    </div>',
    '  </div>',
    '</body>',
    '</html>'
  ].join('\n');
}

/**
 * Sends the career-video follow-up email; skipped when the daily quota can't cover it.
 */
function sendCareerVideoRequestEmail(userEmail, userName) {
  if (!userEmail || userEmail.indexOf("@") === -1) return;
  if (getRemainingEmailQuota() === 0) return;
  sendEmailOnce({
    to: userEmail,
    subject: "Profit Machines Careers - Next Step: Submit Your 15-20 Min Profile Video",
    htmlBody: buildCareerVideoRequestHtml(userName),
    name: EMAIL_CONFIG.name,
    replyTo: EMAIL_CONFIG.replyTo
  });
}

/**
 * Matches an incoming { email, videoDriveLink } payload to its Career_Applications row (most
 * recent application for that email) and records the link — appends a new row if no match.
 */
function handleCareerVideoSubmission(data) {
  var result = { message: "Error: Missing email or video link" };
  var email = String(data.email || data.Email || data["Work Email"] || "").trim().toLowerCase();
  var videoLink = data.videoDriveLink || data.videoLink || data["Profile Video Drive Link"] || "";
  if (!email || !videoLink) return result;

  try {
    var ss = SpreadsheetApp.openById(CONFIG.MAIN_SPREADSHEET_ID);
    var sheet = findSheetFlexible(ss, "Career_Applications") || findSheetFlexible(ss, "Career Applications");
    if (!sheet) { result.message = "Error: Career_Applications sheet not found"; return result; }

    var lastCol = Math.max(sheet.getLastColumn(), 1);
    var headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
    var emailCol = headers.indexOf("Email");
    var linkCol = headers.indexOf("Profile Video Drive Link");
    var statusCol = headers.indexOf("Profile Video Status");
    if (linkCol === -1 || statusCol === -1) {
      result.message = "Error: Sheet missing Profile Video columns - run migrateAddCareerVideoColumns()";
      return result;
    }

    var lastRow = sheet.getLastRow();
    var matchedRow = -1;
    if (emailCol !== -1 && lastRow > 1) {
      var emailValues = sheet.getRange(2, emailCol + 1, lastRow - 1, 1).getValues();
      for (var i = emailValues.length - 1; i >= 0; i--) {
        if (String(emailValues[i][0] || "").trim().toLowerCase() === email) { matchedRow = i + 2; break; }
      }
    }

    if (matchedRow !== -1) {
      sheet.getRange(matchedRow, linkCol + 1).setValue(videoLink);
      sheet.getRange(matchedRow, statusCol + 1).setValue("Received");
    } else {
      var newRow = headers.map(function (h) {
        if (h === "Email") return email;
        if (h === "Profile Video Drive Link") return videoLink;
        if (h === "Profile Video Status") return "Received (No Matching Application)";
        if (h === "Timestamp") return normalizeTimestamp(data.timestamp);
        return "";
      });
      sheet.appendRow(newRow);
    }

    try {
      MailApp.sendEmail({
        to: uniqueEmails(EMAIL_CONFIG.careerEmails).join(","),
        subject: "[TG Career Video] Profile video link received - " + email,
        htmlBody: "<p>A candidate profile video link was submitted.</p><p><strong>Email:</strong> " + escapeHtml(email) + "</p><p><strong>Video Link:</strong> <a href=\"" + escapeHtml(videoLink) + "\">" + escapeHtml(videoLink) + "</a></p>",
        name: EMAIL_CONFIG.name,
        replyTo: EMAIL_CONFIG.replyTo
      });
    } catch (mailErr) {}

    result.message = "Video link saved";
    return result;
  } catch (err) {
    result.message = "Error: " + err.toString();
    return result;
  }
}

/**
 * Backfills the Profile Video columns onto an already-created production Career_Applications tab.
 */
function migrateAddCareerVideoColumns() {
  var ss = SpreadsheetApp.openById(CONFIG.MAIN_SPREADSHEET_ID);
  var sheet = findSheetFlexible(ss, "Career_Applications") || findSheetFlexible(ss, "Career Applications");
  if (!sheet) { console.error("Career_Applications sheet not found."); return; }

  var lastCol = Math.max(sheet.getLastColumn(), 1);
  var headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
  ["Profile Video Drive Link", "Profile Video Status"].forEach(function (col) {
    if (headers.indexOf(col) === -1) {
      sheet.getRange(1, sheet.getLastColumn() + 1).setValue(col).setFontWeight("bold").setBackground("#0f172a").setFontColor("#ffffff");
    }
  });
  console.log("Career_Applications Profile Video columns verified/added.");
}

// =========================================================================================
// 7. MONTHLY CAREER RESUME DIGEST & FORWARDING ENGINE
// =========================================================================================

/**
 * Gathers all career applications received in the past month, compiles candidate profiles,
 * fetches their resumes from Drive/Storage, and forwards them as attachments to Poojasri & BV.
 */
function forwardMonthlyCareerApplications() {
  console.log("🚀 Starting Monthly Career Applications Digest Forwarder for PROFIT MACHINES...");
  
  var ss = SpreadsheetApp.openById(CONFIG.MAIN_SPREADSHEET_ID);
  var sheet = findSheetFlexible(ss, "Career_Applications") || findSheetFlexible(ss, "Career Applications");
  if (!sheet) {
    console.error("Career_Applications sheet not found in main spreadsheet.");
    return;
  }
  
  var data = sheet.getDataRange().getValues();
  if (data.length < 2) {
    console.log("No career applications found.");
    return;
  }
  
  var headers = data[0];
  var nameCol       = headers.indexOf("Name");
  var emailCol      = headers.indexOf("Email");
  var phoneCol      = headers.indexOf("Phone");
  var jobTitleCol   = headers.indexOf("Job Title / Role") !== -1 ? headers.indexOf("Job Title / Role") : headers.indexOf("Job Title");
  var resumeNameCol = headers.indexOf("Resume File Name");
  var driveLinkCol  = headers.indexOf("Resume Drive Link");
  var driveIdCol    = headers.indexOf("Drive File ID");
  var coverCol      = headers.indexOf("Cover Letter");
  var tsCol         = headers.indexOf("Timestamp");
  
  var now = new Date();
  var thirtyDaysAgo = new Date(now.getTime() - 31 * 24 * 60 * 60 * 1000);
  
  var candidates = [];
  var attachments = [];
  var totalAttachmentSize = 0;
  var MAX_TOTAL_ATTACHMENT_BYTES = 20 * 1024 * 1024;

  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var ts = parseSheetDate(row[tsCol]);
    
    if (ts && ts >= thirtyDaysAgo) {
      var candidate = {
        name: row[nameCol] || "Applicant",
        email: row[emailCol] || "",
        phone: row[phoneCol] || "",
        jobTitle: row[jobTitleCol] || "AI Engineer / Fellow",
        resumeName: row[resumeNameCol] || "Resume.pdf",
        driveLink: (driveLinkCol !== -1 ? row[driveLinkCol] : "") || "",
        driveId: (driveIdCol !== -1 ? row[driveIdCol] : "") || "",
        coverLetter: row[coverCol] || "",
        date: Utilities.formatDate(ts, "Asia/Kolkata", "dd-MMM-yyyy")
      };
      
      if (candidate.driveId) {
        try {
          var file = DriveApp.getFileById(candidate.driveId);
          var blob = file.getBlob();
          var size = blob.getBytes().length;
          if (totalAttachmentSize + size < MAX_TOTAL_ATTACHMENT_BYTES) {
            blob.setName(candidate.name.replace(/[^a-zA-Z0-9_\s]/g, "") + "_" + (candidate.resumeName || "Resume.pdf"));
            attachments.push(blob);
            totalAttachmentSize += size;
          }
        } catch (fileErr) {
          console.error("Could not fetch Drive file ID: " + candidate.driveId, fileErr.toString());
        }
      }
      
      candidates.push(candidate);
    }
  }

  if (candidates.length === 0) {
    console.log("ℹ️ No career applications recorded in the past 30 days.");
    return;
  }

  var monthLabel = Utilities.formatDate(now, "Asia/Kolkata", "MMMM yyyy");
  var emailHtml = buildMonthlyCareerEmailHtml(monthLabel, candidates, ss.getUrl());
  var subject = "[Profit Machines Careers] Monthly Resumes Digest - " + monthLabel + " (" + candidates.length + " Candidates)";
  
  var quota = getRemainingEmailQuota();
  if (quota === 0) {
    console.error("❌ Cannot send monthly digest: email quota exhausted.");
    return;
  }
  try {
    var mailOptions = {
      to: uniqueEmails(EMAIL_CONFIG.careerEmails).join(","),
      subject: subject,
      htmlBody: emailHtml,
      name: EMAIL_CONFIG.name,
      replyTo: EMAIL_CONFIG.replyTo
    };
    if (attachments.length > 0) {
      mailOptions.attachments = attachments;
    }
    var digestSend = sendEmailOnce(mailOptions);
    if (digestSend.ok) {
      console.log("✅ Monthly Career Digest sent to: " + mailOptions.to);
    } else {
      console.error("❌ Monthly digest failed: " + digestSend.error);
    }
  } catch (err) {
    console.error("Error sending monthly career digest email:", err.toString());
  }
}

function buildMonthlyCareerEmailHtml(monthLabel, candidates, sheetUrl) {
  var candidateRows = candidates.map(function(c, idx) {
    var resumeCell = c.driveLink 
      ? '<a href="' + c.driveLink + '" target="_blank" style="color:#6366f1;font-weight:bold;text-decoration:none;">&#128196; View in Drive</a>'
      : '<span style="color:#94a3b8;">Attached</span>';

    return '<tr style="background:' + (idx % 2 === 0 ? '#ffffff' : '#f8fafc') + ';">' +
           '<td style="padding:12px 10px;border-bottom:1px solid #e2e8f0;font-weight:700;color:#0f172a;font-size:13px;">' + c.name + '</td>' +
           '<td style="padding:12px 10px;border-bottom:1px solid #e2e8f0;color:#4338ca;font-weight:600;font-size:12px;">' + c.jobTitle + '</td>' +
           '<td style="padding:12px 10px;border-bottom:1px solid #e2e8f0;color:#334155;font-size:12px;"><a href="mailto:' + c.email + '" style="color:#0284c7;text-decoration:none;">' + c.email + '</a><br>' + c.phone + '</td>' +
           '<td style="padding:12px 10px;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:11px;">' + c.date + '</td>' +
           '<td style="padding:12px 10px;border-bottom:1px solid #e2e8f0;font-size:12px;text-align:center;">' + resumeCell + '</td>' +
           '</tr>';
  }).join('');

  return [
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
    '  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">',
    '  <meta charset="utf-8">',
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0">',
    '</head>',
    '<body style="font-family:\'Segoe UI\',Arial,sans-serif;background-color:#f1f5f9;margin:0;padding:25px 15px;">',
    ' <div style="max-width:700px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.06);border:1px solid #e2e8f0;">',
    '  <div style="background:linear-gradient(135deg,#090d16 0%,#1e1b4b 50%,#4338ca 100%);padding:30px 25px;color:#ffffff;">',
    '   <div style="display:inline-block;background:#6366f1;color:#ffffff;font-size:11px;font-weight:800;padding:4px 12px;border-radius:20px;letter-spacing:0.06em;margin-bottom:10px;">MONTHLY TALENT DIGEST</div>',
    '   <h2 style="margin:0;font-size:22px;font-weight:800;">PROFIT MACHINES Talent &amp; Fellowship Pipeline</h2>',
    '   <p style="margin:6px 0 0 0;color:#c7d2fe;font-size:13px;">Candidates for ' + monthLabel + ' &bull; Total: <strong>' + candidates.length + '</strong></p>',
    '  </div>',
    '  <div style="padding:25px;">',
    '   <table style="width:100%;border-collapse:collapse;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">',
    '    <thead>',
    '     <tr style="background:#0f172a;color:#ffffff;font-size:11px;text-transform:uppercase;letter-spacing:0.05em;">',
    '      <th style="padding:10px;text-align:left;">Candidate</th>',
    '      <th style="padding:10px;text-align:left;">Role</th>',
    '      <th style="padding:10px;text-align:left;">Contact</th>',
    '      <th style="padding:10px;text-align:left;">Date</th>',
    '      <th style="padding:10px;text-align:center;">Resume</th>',
    '     </tr>',
    '    </thead>',
    '    <tbody>' + candidateRows + '</tbody>',
    '   </table>',
    '   <div style="text-align:center;margin-top:25px;">',
    '    <a href="' + sheetUrl + '" style="background:#6366f1;color:#ffffff;text-decoration:none;padding:12px 25px;border-radius:8px;font-weight:700;font-size:13px;display:inline-block;">Open Career Applications Sheet</a>',
    '   </div>',
    '  </div>',
    '  <div style="background:#f8fafc;padding:18px 25px;border-top:1px solid #e2e8f0;font-size:11px;color:#94a3b8;text-align:center;">',
    '   &copy; ' + new Date().getFullYear() + ' PROFIT MACHINES. Confidential Talent Pipeline.',
    '  </div>',
    ' </div>',
    '</body>',
    '</html>'
  ].join('\n');
}

// =========================================================================================
// 8. PROFIT MACHINES - EXECUTIVE ANALYTICS BRIEF ENGINE (DAILY, WEEKLY & MONTHLY)
// =========================================================================================

function dailyReport() {
  var ss = SpreadsheetApp.openById(CONFIG.MAIN_SPREADSHEET_ID);
  if (!ss) return;

  var yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
  var dayBefore = new Date(); dayBefore.setDate(dayBefore.getDate() - 2);

  var reportData = aggregateExecutiveReportData(ss, "DAILY", yesterday, yesterday, dayBefore, dayBefore);
  var emailHtml = buildExecutiveAnalyticsBriefHtml(reportData, "DAILY");
  sendReportEmail("[PROFIT MACHINES] Daily Analytics Report - " + cleanEmailText(reportData.periodDateStr), emailHtml);
}

function weeklyReport() {
  var ss = SpreadsheetApp.openById(CONFIG.MAIN_SPREADSHEET_ID);
  if (!ss) return;

  var now = new Date();
  var w1Start = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  var w1End   = new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000);
  var w2Start = new Date(w1Start.getTime() - 7 * 24 * 60 * 60 * 1000);
  var w2End   = new Date(w1Start.getTime() - 1 * 24 * 60 * 60 * 1000);

  var reportData = aggregateExecutiveReportData(ss, "WEEKLY", w1Start, w1End, w2Start, w2End);
  var emailHtml = buildExecutiveAnalyticsBriefHtml(reportData, "WEEKLY");
  sendReportEmail("[PROFIT MACHINES] Weekly Analytics Report - " + cleanEmailText(reportData.periodRangeStr), emailHtml);
}

function monthlyReport() {
  var ss = SpreadsheetApp.openById(CONFIG.MAIN_SPREADSHEET_ID);
  if (!ss) return;

  var now = new Date();
  var m1Start = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  var m1End   = new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000);
  var m2Start = new Date(m1Start.getTime() - 30 * 24 * 60 * 60 * 1000);
  var m2End   = new Date(m1Start.getTime() - 1 * 24 * 60 * 60 * 1000);

  var reportData = aggregateExecutiveReportData(ss, "MONTHLY", m1Start, m1End, m2Start, m2End);
  var monthLabel = Utilities.formatDate(m1End, "Asia/Kolkata", "MMMM yyyy");
  var emailHtml = buildExecutiveAnalyticsBriefHtml(reportData, "MONTHLY");
  sendReportEmail("[PROFIT MACHINES] Monthly Analytics Report - " + cleanEmailText(monthLabel), emailHtml);
}

/**
 * Normalizes any route or full URL down to a clean, canonical route/sub-route without query parameters or domains.
 */
function normalizeRoutePath(rawPathOrUrl) {
  if (!rawPathOrUrl) return "/";
  var str = String(rawPathOrUrl).trim();
  
  // If multiline or composite title + route is passed, extract the route portion
  if (str.indexOf("\n") !== -1) {
    var lines = str.split("\n");
    for (var i = lines.length - 1; i >= 0; i--) {
      var line = lines[i].trim();
      if (line.startsWith("/") || line.startsWith("http")) {
        str = line;
        break;
      }
    }
  } else if (!str.startsWith("/") && !str.startsWith("http") && str.indexOf("/") !== -1) {
    str = str.substring(str.indexOf("/"));
  }

  // Strip domain if present (e.g. http://profitmachines.com/solutions/... or https://profitmachines.com/...)
  str = str.replace(/^https?:\/\/[^\/]+/i, "");
  // Strip query parameters (?utm_source=... etc) and hash fragments (#...)
  str = str.split('?')[0].split('#')[0].trim();
  if (!str || str === "") return "/";
  // Remove trailing slash unless it's just "/"
  if (str.length > 1 && str.endsWith("/")) {
    str = str.replace(/\/+$/, "");
  }
  if (!str.startsWith("/")) {
    str = "/" + str;
  }
  return str;
}

/**
 * Categorizes form types strictly into Quick Forms, Consulting Sessions, or standard secondary categories.
 */
function getFormCategoryLabel(nameOrType) {
  var s = String(nameOrType || "").toLowerCase().trim();
  if (s.indexOf("quick") !== -1 || s.indexOf("floating") !== -1 || s === "quick_enquiry_leads" || s === "floating_lead") {
    return "Quick Forms";
  }
  if (s.indexOf("career") !== -1 || s.indexOf("candidate") !== -1 || s === "career_applications") {
    return "Career Applications";
  }
  if (s.indexOf("partner") !== -1 || s === "partner_applications") {
    return "Partner Applications";
  }
  if (s.indexOf("newsletter") !== -1 || s === "newsletter_subscribers") {
    return "Newsletter Subscribers";
  }
  if (s.indexOf("chatbot") !== -1 || s === "chatbot_leads") {
    return "Chatbot Inquiries";
  }
  return "Consulting Sessions";
}

/**
 * Strips broken Unicode replacement characters (e.g. \uFFFD) and mojibake from email content.
 */
function cleanEmailText(str) {
  if (!str) return "";
  return String(str)
    .replace(/\uFFFD/g, '')
    .replace(/\uFFFE/g, '')
    .replace(/[\uD800-\uDFFF]/g, '')
    .trim();
}

/**
 * Builds a single combined QuickChart line chart URL for dual-trend visualization.
 */
function generateMergedTrendChartUrl(labels, seriesVisitors, seriesLeads) {
  var chartConfig = {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Visitors / Sessions',
          data: seriesVisitors,
          borderColor: '#6366f1',
          backgroundColor: 'rgba(99, 102, 241, 0.08)',
          borderWidth: 2.5,
          pointRadius: 3,
          pointBackgroundColor: '#6366f1',
          fill: false,
          tension: 0.25
        },
        {
          label: 'Leads Captured',
          data: seriesLeads,
          borderColor: '#059669',
          backgroundColor: 'rgba(5, 150, 105, 0.08)',
          borderWidth: 2.5,
          pointRadius: 3,
          pointBackgroundColor: '#059669',
          fill: false,
          tension: 0.25
        }
      ]
    },
    options: {
      responsive: true,
      legend: {
        display: true,
        position: 'top',
        labels: {
          fontColor: '#334155',
          fontSize: 11,
          boxWidth: 12,
          usePointStyle: true
        }
      },
      scales: {
        xAxes: [{
          gridLines: { color: 'rgba(226, 232, 240, 0.6)', zeroLineColor: '#cbd5e1' },
          ticks: { fontColor: '#64748b', fontSize: 10 }
        }],
        yAxes: [{
          gridLines: { color: 'rgba(226, 232, 240, 0.6)', zeroLineColor: '#cbd5e1' },
          ticks: { fontColor: '#64748b', fontSize: 10, beginAtZero: true, precision: 0 }
        }]
      }
    }
  };

  return 'https://quickchart.io/chart?c=' + encodeURIComponent(JSON.stringify(chartConfig)) + '&w=580&h=250&bkg=white&devicePixelRatio=2';
}

/**
 * Builds a QuickChart pie/doughnut/horizontalBar image URL from real, already-aggregated
 * labels/values (never fabricated placeholders — caller must pass live counts).
 */
function generateBreakdownChartUrl(type, labels, values, title) {
  var palette = ['#6366f1', '#059669', '#f59e0b', '#0ea5e9', '#ef4444', '#8b5cf6', '#14b8a6', '#f43f5e'];
  var bg = labels.map(function (_, i) { return palette[i % palette.length]; });
  var isBar = type === 'horizontalBar' || type === 'bar';
  var chartConfig = {
    type: type,
    data: {
      labels: labels,
      datasets: [{
        data: values,
        backgroundColor: bg,
        borderWidth: isBar ? 0 : 2,
        borderColor: '#ffffff'
      }]
    },
    options: {
      responsive: true,
      title: { display: !!title, text: title, fontColor: '#334155', fontSize: 12, fontStyle: 'bold' },
      legend: {
        display: !isBar,
        position: 'right',
        labels: { fontColor: '#334155', fontSize: 10, boxWidth: 10 }
      }
    }
  };
  if (isBar) {
    chartConfig.options.scales = {
      xAxes: [{ ticks: { fontColor: '#64748b', fontSize: 10, beginAtZero: true, precision: 0 }, gridLines: { color: 'rgba(226, 232, 240, 0.6)' } }],
      yAxes: [{ ticks: { fontColor: '#0f172a', fontSize: 10 }, gridLines: { display: false } }]
    };
  }
  return 'https://quickchart.io/chart?c=' + encodeURIComponent(JSON.stringify(chartConfig)) + '&w=340&h=230&bkg=white&devicePixelRatio=2';
}

function aggregateExecutiveReportData(ss, periodType, startDate, endDate, prevStartDate, prevEndDate) {
  var periodDateStr = (periodType === "DAILY")
    ? Utilities.formatDate(endDate, "Asia/Kolkata", "d MMMM yyyy")
    : Utilities.formatDate(startDate, "Asia/Kolkata", "d MMMM yyyy") + " - " + Utilities.formatDate(endDate, "Asia/Kolkata", "d MMMM yyyy");
  var periodRangeStr = Utilities.formatDate(startDate, "Asia/Kolkata", "d MMM yyyy") + " - " + Utilities.formatDate(endDate, "Asia/Kolkata", "d MMM yyyy");

  var trafficSheet = findSheetFlexible(ss, "Live_Traffic_Events") || findSheetFlexible(ss, "Traffic_Analytics") || findSheetFlexible(ss, "Page_Views") || findSheetFlexible(ss, "Page Views");
  var trafficData = (trafficSheet && trafficSheet.getLastRow() > 1) ? trafficSheet.getDataRange().getValues() : [];
  
  var tHeaders = trafficData.length > 0 ? trafficData[0] : [];
  // Live_Traffic_Events uses SCHEMA_95_HEADERS (snake_case); other legacy tabs use Title Case —
  // check both so real data is actually read regardless of which sheet is live.
  var findCol = function (headers, names) {
    for (var n = 0; n < names.length; n++) {
      var idx = headers.indexOf(names[n]);
      if (idx !== -1) return idx;
    }
    return -1;
  };
  var tsCol = findCol(tHeaders, ["Timestamp", "timestamp"]);
  var ipCol = findCol(tHeaders, ["IP Address", "ip_address"]);
  var pathCol = findCol(tHeaders, ["Page Path", "Page URL", "page", "page_url"]);
  var srcCol = findCol(tHeaders, ["Traffic Source", "Source", "traffic_source"]);
  var sessCol = findCol(tHeaders, ["Session ID", "session_id"]);

  var curSessions = new Set();
  var curVisitors = new Set();
  var curPages = {};
  var curSources = {};

  var prevSessions = new Set();
  var prevVisitors = new Set();

  // Setup Merged Trend Buckets
  var trendLabels = [];
  var trendVisitors = [];
  var trendLeads = [];

  var startMs = startDate.getTime();
  var endMs = endDate.getTime() + 24 * 60 * 60 * 1000 - 1;

  if (periodType === "DAILY") {
    trendLabels = ["00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00"];
    trendVisitors = [0, 0, 0, 0, 0, 0, 0, 0];
    trendLeads = [0, 0, 0, 0, 0, 0, 0, 0];
  } else {
    // Weekly 7 daily intervals
    for (var d = 0; d < 7; d++) {
      var dObj = new Date(startMs + d * 24 * 60 * 60 * 1000);
      trendLabels.push(Utilities.formatDate(dObj, "Asia/Kolkata", "d MMM"));
      trendVisitors.push(0);
      trendLeads.push(0);
    }
  }

  for (var i = 1; i < trafficData.length; i++) {
    var row = trafficData[i];
    var ts = parseSheetDate(row[tsCol]);
    if (!ts) continue;
    var ip = String(row[ipCol] || "").trim();
    // Only count real captured Session ID values — no per-row fallback IDs, so Sessions
    // reflects actual tracked sessions instead of a fabricated number that can mismatch Visitors.
    var sess = (sessCol !== -1) ? String(row[sessCol] || "").trim() : "";
    var rawPath = (pathCol !== -1) ? String(row[pathCol] || "/") : "/";
    var cleanRoute = normalizeRoutePath(rawPath);
    var source = normalizeTrafficSource(row[srcCol]);

    var tTime = ts.getTime();
    if (tTime >= startMs && tTime <= endMs) {
      if (sess) curSessions.add(sess);
      if (ip) curVisitors.add(ip);
      
      if (!curPages[cleanRoute]) {
        curPages[cleanRoute] = { path: cleanRoute, visits: 0, visitors: new Set() };
      }
      curPages[cleanRoute].visits++;
      if (ip) curPages[cleanRoute].visitors.add(ip);
      curSources[source] = (curSources[source] || 0) + 1;

      // Bucket for trend chart
      if (periodType === "DAILY") {
        var istHours = (ts.getUTCHours() + 5.5) % 24;
        var bIdx = Math.min(7, Math.floor(istHours / 3));
        trendVisitors[bIdx]++;
      } else {
        var dayDiff = Math.floor((tTime - startMs) / (24 * 60 * 60 * 1000));
        if (dayDiff >= 0 && dayDiff < 7) {
          trendVisitors[dayDiff]++;
        }
      }
    } else if (tTime >= prevStartDate.getTime() && tTime <= new Date(prevEndDate.getTime() + 24*60*60*1000 - 1).getTime()) {
      if (sess) prevSessions.add(sess);
      if (ip) prevVisitors.add(ip);
    }
  }

  var currentLeadsData = aggregateLeadsFromAllSources(ss, startDate, endDate, periodType, startMs, trendLeads);
  var previousLeadsData = aggregateLeadsFromAllSources(ss, prevStartDate, prevEndDate, periodType, prevStartDate.getTime(), null);

  var curVisitorsCount = curVisitors.size || curSessions.size || 0;
  var curSessionsCount = curSessions.size || curVisitorsCount || 0;
  var prevVisitorsCount = prevVisitors.size || prevSessions.size || 0;
  var prevSessionsCount = prevSessions.size || prevVisitorsCount || 0;

  var curLeadsCount = currentLeadsData.totalLeads;
  var prevLeadsCount = previousLeadsData.totalLeads;
  var curEnquiriesCount = currentLeadsData.totalEnquiries;
  var prevEnquiriesCount = previousLeadsData.totalEnquiries;

  var curConvRate = curSessionsCount > 0 ? ((curLeadsCount / curSessionsCount) * 100).toFixed(2) : "0.00";
  var prevConvRate = prevSessionsCount > 0 ? ((prevLeadsCount / prevSessionsCount) * 100).toFixed(2) : "0.00";

  var sourceList = Object.keys(curSources).map(function(src) {
    var vCount = curSources[src];
    var lCount = currentLeadsData.bySource[src] ? currentLeadsData.bySource[src].leads : 0;
    var eCount = currentLeadsData.bySource[src] ? currentLeadsData.bySource[src].enquiries : 0;
    var cRate = vCount > 0 ? ((lCount / vCount) * 100).toFixed(1) : "0.0";
    return { source: src, visitors: vCount, leads: lCount, enquiries: eCount, convRate: cRate + "%" };
  }).sort(function(a, b) { return b.visitors - a.visitors; });

  var topLeadSource = sourceList.length > 0 ? sourceList[0].source : "Direct / Organic";

  // Build clean TOP ENGAGED PAGES list: Route only, sorted by views descending
  var topPagesList = Object.keys(curPages).map(function(p) {
    var item = curPages[p];
    return {
      path: item.path,
      views: item.visits,
      visitors: item.visitors.size,
      leads: currentLeadsData.byPage[item.path] || 0
    };
  }).sort(function(a, b) { return b.views - a.views; }).slice(0, 10);

  // Generate merged trend chart URL
  var mergedChartUrl = generateMergedTrendChartUrl(trendLabels, trendVisitors, trendLeads);

  return {
    periodType: periodType,
    periodDateStr: periodDateStr,
    periodRangeStr: periodRangeStr,
    kpis: {
      visitors: curVisitorsCount,
      sessions: curSessionsCount,
      leads: curLeadsCount,
      enquiries: curEnquiriesCount,
      conversionRate: curConvRate + "%",
      topLeadSource: topLeadSource
    },
    comparison: {
      visitorsDelta: calculateDelta(curVisitorsCount, prevVisitorsCount),
      sessionsDelta: calculateDelta(curSessionsCount, prevSessionsCount),
      leadsDelta: calculateDelta(curLeadsCount, prevLeadsCount),
      enquiriesDelta: calculateDelta(curEnquiriesCount, prevEnquiriesCount),
      prevVisitors: prevVisitorsCount,
      prevLeads: prevLeadsCount,
      prevEnquiries: prevEnquiriesCount,
      prevConvRate: prevConvRate + "%"
    },
    trend: {
      labels: trendLabels,
      visitors: trendVisitors,
      leads: trendLeads,
      chartUrl: mergedChartUrl
    },
    formBreakdown: currentLeadsData.byForm,
    sources: sourceList,
    topPages: topPagesList,
    dashboardUrl: ss.getUrl()
  };
}

function aggregateLeadsFromAllSources(ss, startDate, endDate, periodType, startMs, trendLeadsRef) {
  var sTime = startDate.getTime();
  var eTime = endDate.getTime() + 24 * 60 * 60 * 1000 - 1;

  var result = {
    totalLeads: 0,
    totalEnquiries: 0,
    bySource: {},
    byPage: {},
    byForm: {
      "Quick Forms": 0,
      "Consulting Sessions": 0
    }
  };

  var FORM_SOURCES = [
    { canonical: "Contact_Leads", isLead: true, category: "Consulting Sessions" },
    { canonical: "AI_Diagnostic_Leads", isLead: true, category: "Consulting Sessions" },
    { canonical: "AI_Readiness_Leads", isLead: true, category: "Consulting Sessions" },
    { canonical: "Workshop_Requests", isLead: true, category: "Consulting Sessions" },
    { canonical: "RFP_Proposals", isLead: true, category: "Consulting Sessions" },
    { canonical: "Talk_To_Architect", isLead: true, category: "Consulting Sessions" },
    { canonical: "Google_Ad_Leads", isLead: true, category: "Consulting Sessions" },
    { canonical: "Quick_Enquiry_Leads", isLead: true, category: "Quick Forms" },
    { canonical: "Career_Applications", isLead: false, isEnquiry: true, category: "Career Applications" },
    { canonical: "Partner_Applications", isLead: true, category: "Partner Applications" },
    { canonical: "Chatbot_Leads", isLead: false, isEnquiry: true, category: "Chatbot Inquiries" },
    { canonical: "Newsletter_Subscribers", isLead: false, isEnquiry: true, category: "Newsletter Subscribers" }
  ];

  var visitedSheets = new Set();

  FORM_SOURCES.forEach(function(item) {
    var sh = findSheetFlexible(ss, item.canonical);
    if (!sh) return;
    var sheetId = sh.getSheetId();
    if (visitedSheets.has(sheetId)) return;
    visitedSheets.add(sheetId);

    var data = sh.getDataRange().getValues();
    if (data.length < 2) return;
    var headers = data[0];

    var tsCol = headers.indexOf("Timestamp");
    if (tsCol === -1) tsCol = headers.indexOf("timestamp");
    if (tsCol === -1) return;

    var srcCol = headers.indexOf("Source") !== -1 ? headers.indexOf("Source") : headers.indexOf("UTM Source");
    var pageCol = headers.indexOf("Page") !== -1 ? headers.indexOf("Page") : headers.indexOf("Page Path");

    for (var r = 1; r < data.length; r++) {
      var ts = parseSheetDate(data[r][tsCol]);
      if (!ts) continue;
      var tTime = ts.getTime();
      if (tTime >= sTime && tTime <= eTime) {
        if (item.isLead) result.totalLeads++;
        result.totalEnquiries++;

        var categoryLabel = item.category || getFormCategoryLabel(item.canonical);
        result.byForm[categoryLabel] = (result.byForm[categoryLabel] || 0) + 1;

        var rawSrc = (srcCol !== -1) ? data[r][srcCol] : "Direct";
        var normSrc = normalizeTrafficSource(rawSrc);
        if (!result.bySource[normSrc]) {
          result.bySource[normSrc] = { leads: 0, enquiries: 0 };
        }
        if (item.isLead) result.bySource[normSrc].leads++;
        result.bySource[normSrc].enquiries++;

        var rawPage = (pageCol !== -1) ? String(data[r][pageCol] || "/") : "/";
        var cleanRoute = normalizeRoutePath(rawPage);
        result.byPage[cleanRoute] = (result.byPage[cleanRoute] || 0) + 1;

        // Trend aggregation bucket
        if (trendLeadsRef && item.isLead) {
          if (periodType === "DAILY") {
            var istHours = (ts.getUTCHours() + 5.5) % 24;
            var bIdx = Math.min(7, Math.floor(istHours / 3));
            trendLeadsRef[bIdx]++;
          } else if (startMs) {
            var dayDiff = Math.floor((tTime - startMs) / (24 * 60 * 60 * 1000));
            if (dayDiff >= 0 && dayDiff < 7) {
              trendLeadsRef[dayDiff]++;
            }
          }
        }
      }
    }
  });

  return result;
}

function buildExecutiveAnalyticsBriefHtml(data, periodType) {
  var k = data.kpis;
  var c = data.comparison;
  var mainHeading = (periodType === "DAILY") ? "DAILY ANALYTICS REPORT" : (periodType === "WEEKLY" ? "WEEKLY ANALYTICS REPORT" : "MONTHLY ANALYTICS REPORT");
  var trendHeading = (periodType === "DAILY") ? "TREND ANALYSIS" : (periodType === "WEEKLY" ? "WEEKLY TREND ANALYSIS" : "MONTHLY TREND ANALYSIS");
  var subtitle = (periodType === "DAILY")
    ? "Daily Executive Performance Summary &bull; " + cleanEmailText(data.periodDateStr)
    : (periodType === "WEEKLY" ? "Weekly Executive Performance Summary &bull; " + cleanEmailText(data.periodRangeStr) : "Monthly Executive Performance Summary &bull; " + cleanEmailText(data.periodDateStr));

  // TOP ENGAGED PAGES rows (Clean route only, views, leads)
  var pageRows = (data.topPages || []).map(function(p) {
    return '<tr style="border-bottom: 1px solid #f1f5f9;">' +
           '  <td style="padding: 9px 12px; font-size: 13px; font-weight: 600; color: #0f172a; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, monospace;">' + escapeHtml(p.path) + '</td>' +
           '  <td style="padding: 9px 12px; font-size: 13px; font-weight: 700; text-align: right; color: #6366f1;">' + formatNum(p.views) + '</td>' +
           '  <td style="padding: 9px 12px; font-size: 13px; text-align: right; color: #059669; font-weight: 700;">' + (p.leads || 0) + '</td>' +
           '</tr>';
  }).join('');

  // ACQUISITION CHANNELS rows
  var sourceRows = (data.sources || []).map(function(s) {
    return '<tr style="border-bottom: 1px solid #f1f5f9;">' +
           '  <td style="padding: 9px 12px; font-size: 13px; font-weight: 600; color: #0f172a;">' + escapeHtml(s.source) + '</td>' +
           '  <td style="padding: 9px 12px; font-size: 13px; text-align: right; color: #475569;">' + formatNum(s.visitors) + '</td>' +
           '  <td style="padding: 9px 12px; font-size: 13px; font-weight: 700; text-align: right; color: #059669;">' + s.leads + '</td>' +
           '  <td style="padding: 9px 12px; font-size: 12px; font-weight: 700; text-align: right; color: #6366f1;">' + s.convRate + '</td>' +
           '</tr>';
  }).join('');

  // FORM PERFORMANCE rows (Quick Forms vs Consulting Sessions)
  var formKeys = ["Quick Forms", "Consulting Sessions"];
  if (data.formBreakdown) {
    Object.keys(data.formBreakdown).forEach(function(fk) {
      if (formKeys.indexOf(fk) === -1 && data.formBreakdown[fk] > 0) formKeys.push(fk);
    });
  }
  var formRows = formKeys.map(function(fName) {
    var count = (data.formBreakdown && data.formBreakdown[fName]) ? data.formBreakdown[fName] : 0;
    return '<tr style="border-bottom: 1px solid #f1f5f9;">' +
           '  <td style="padding: 9px 12px; font-size: 13px; font-weight: 600; color: #0f172a;">' + escapeHtml(fName) + '</td>' +
           '  <td style="padding: 9px 12px; font-size: 13px; font-weight: 700; text-align: right; color: #059669;">' + count + '</td>' +
           '</tr>';
  }).join('');

  // Trend table fallback rows
  var trendTableRows = "";
  if (data.trend && data.trend.labels) {
    trendTableRows = data.trend.labels.map(function(lbl, idx) {
      return '<tr style="border-bottom: 1px solid #f1f5f9;">' +
             '  <td style="padding: 6px 10px; font-size: 11px; color: #475569;">' + escapeHtml(lbl) + '</td>' +
             '  <td style="padding: 6px 10px; font-size: 11px; font-weight: 700; text-align: right; color: #6366f1;">' + (data.trend.visitors[idx] || 0) + '</td>' +
             '  <td style="padding: 6px 10px; font-size: 11px; font-weight: 700; text-align: right; color: #059669;">' + (data.trend.leads[idx] || 0) + '</td>' +
             '</tr>';
    }).join('');
  }

  // Chart images built strictly from the same live counts as the tables above (no synthetic data)
  var formChartImg = "";
  var formCounts = formKeys.map(function (fName) { return (data.formBreakdown && data.formBreakdown[fName]) ? data.formBreakdown[fName] : 0; });
  if (formKeys.length > 0 && formCounts.some(function (v) { return v > 0; })) {
    var formChartUrl = generateBreakdownChartUrl('pie', formKeys, formCounts, 'Form Performance Split');
    formChartImg = '<div style="text-align:center;padding:12px 0 4px 0;"><img src="' + formChartUrl + '" alt="Form Performance Split" style="max-width:300px;width:100%;height:auto;" /></div>';
  }

  var sourceChartImg = "";
  if ((data.sources || []).length > 0) {
    var sourceChartUrl = generateBreakdownChartUrl('horizontalBar', data.sources.map(function (s) { return s.source; }), data.sources.map(function (s) { return s.visitors; }), 'Visitors by Acquisition Channel');
    sourceChartImg = '<div style="text-align:center;padding:12px 0 4px 0;"><img src="' + sourceChartUrl + '" alt="Visitors by Acquisition Channel" style="max-width:100%;height:auto;" /></div>';
  }

  return [
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
    '  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">',
    '  <meta charset="utf-8">',
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0">',
    '</head>',
    '<body style="font-family: \'Segoe UI\', -apple-system, BlinkMacSystemFont, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 25px 15px;">',
    '  <div style="max-width: 660px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">',
    '    <div style="background: linear-gradient(135deg, #090d16 0%, #1e1b4b 60%, #312e81 100%); padding: 28px 25px; color: #ffffff;">',
    '      <div style="font-size: 11px; font-weight: 800; color: #818cf8; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 4px;">PROFIT MACHINES ENTERPRISE ANALYTICS</div>',
    '      <h2 style="margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.02em;">' + mainHeading + '</h2>',
    '      <p style="margin: 6px 0 0 0; font-size: 13px; color: #c7d2fe;">' + subtitle + '</p>',
    '    </div>',
    '    <div style="padding: 24px 22px;">',
    '      <!-- KPIS -->',
    '      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">',
    '        <tr>',
    '          <td width="25%" style="padding: 4px;"><div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px;text-align:center;"><div style="font-size:10px;font-weight:800;color:#64748b;">VISITORS</div><div style="font-size:18px;font-weight:800;color:#0f172a;margin-top:4px;">' + formatNum(k.visitors) + '</div></div></td>',
    '          <td width="25%" style="padding: 4px;"><div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px;text-align:center;"><div style="font-size:10px;font-weight:800;color:#64748b;">SESSIONS</div><div style="font-size:18px;font-weight:800;color:#6366f1;margin-top:4px;">' + formatNum(k.sessions) + '</div></div></td>',
    '          <td width="25%" style="padding: 4px;"><div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px;text-align:center;"><div style="font-size:10px;font-weight:800;color:#64748b;">LEADS</div><div style="font-size:18px;font-weight:800;color:#059669;margin-top:4px;">' + formatNum(k.leads) + '</div></div></td>',
    '          <td width="25%" style="padding: 4px;"><div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px;text-align:center;"><div style="font-size:10px;font-weight:800;color:#64748b;">CONV. RATE</div><div style="font-size:18px;font-weight:800;color:#7c3aed;margin-top:4px;">' + k.conversionRate + '</div></div></td>',
    '        </tr>',
    '      </table>',
    '',
    '      <!-- MERGED TREND ANALYSIS (ONE COMBINED GRAPH) -->',
    '      <div style="margin-bottom: 20px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">',
    '        <div style="background: #f8fafc; padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-size: 11px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: 0.05em;">' + trendHeading + '</div>',
    '        <div style="padding: 14px; text-align: center;">',
    '          <img src="' + (data.trend ? data.trend.chartUrl : '') + '" alt="Trend Analysis: Visitors / Sessions vs Leads Captured" style="width: 100%; max-width: 580px; height: auto; display: block; margin: 0 auto; border-radius: 6px;" />',
    '          <div style="margin-top: 10px; font-size: 11px; color: #64748b; display: flex; justify-content: center; gap: 16px;">',
    '            <span style="color:#6366f1; font-weight:700;">&mdash; Visitors / Sessions</span>',
    '            <span style="color:#059669; font-weight:700;">&mdash; Leads Captured</span>',
    '          </div>',
    '        </div>',
    '        <table width="100%" cellpadding="0" cellspacing="0" style="border-top: 1px solid #f1f5f9;">',
    '          <thead>',
    '            <tr style="background:#f8fafc;font-size:10px;color:#64748b;text-transform:uppercase;">',
    '              <th style="padding:6px 10px;text-align:left;">Timeline</th>',
    '              <th style="padding:6px 10px;text-align:right;">Visitors / Sessions</th>',
    '              <th style="padding:6px 10px;text-align:right;">Leads</th>',
    '            </tr>',
    '          </thead>',
    '          <tbody>' + (trendTableRows || '<tr><td colspan="3" style="padding:8px;text-align:center;color:#94a3b8;">No trend data</td></tr>') + '</tbody>',
    '        </table>',
    '      </div>',
    '',
    '      <!-- TOP ENGAGED PAGES -->',
    '      <div style="margin-bottom: 20px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">',
    '        <div style="background: #f8fafc; padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-size: 11px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: 0.05em;">TOP ENGAGED PAGES</div>',
    '        <table width="100%" cellpadding="0" cellspacing="0">',
    '          <thead>',
    '            <tr style="background:#f1f5f9;font-size:11px;color:#64748b;">',
    '              <th style="padding:6px 12px;text-align:left;">Route</th>',
    '              <th style="padding:6px 12px;text-align:right;">Page Views</th>',
    '              <th style="padding:6px 12px;text-align:right;">Leads</th>',
    '            </tr>',
    '          </thead>',
    '          <tbody>' + (pageRows || '<tr><td colspan="3" style="padding:10px;text-align:center;color:#94a3b8;">No data</td></tr>') + '</tbody>',
    '        </table>',
    '      </div>',
    '',
    '      <!-- FORM PERFORMANCE -->',
    '      <div style="margin-bottom: 20px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">',
    '        <div style="background: #f8fafc; padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-size: 11px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: 0.05em;">FORM PERFORMANCE</div>',
    '        ' + formChartImg,
    '        <table width="100%" cellpadding="0" cellspacing="0">',
    '          <thead>',
    '            <tr style="background:#f1f5f9;font-size:11px;color:#64748b;">',
    '              <th style="padding:6px 12px;text-align:left;">Form Category</th>',
    '              <th style="padding:6px 12px;text-align:right;">Submissions</th>',
    '            </tr>',
    '          </thead>',
    '          <tbody>' + (formRows || '<tr><td colspan="2" style="padding:10px;text-align:center;color:#94a3b8;">No submissions</td></tr>') + '</tbody>',
    '        </table>',
    '      </div>',
    '',
    '      <!-- ACQUISITION CHANNELS -->',
    '      <div style="margin-bottom: 20px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">',
    '        <div style="background: #f8fafc; padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-size: 11px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: 0.05em;">ACQUISITION CHANNELS</div>',
    '        ' + sourceChartImg,
    '        <table width="100%" cellpadding="0" cellspacing="0">',
    '          <thead>',
    '            <tr style="background:#f1f5f9;font-size:11px;color:#64748b;">',
    '              <th style="padding:6px 12px;text-align:left;">Source</th>',
    '              <th style="padding:6px 12px;text-align:right;">Visitors</th>',
    '              <th style="padding:6px 12px;text-align:right;">Leads</th>',
    '              <th style="padding:6px 12px;text-align:right;">Rate</th>',
    '            </tr>',
    '          </thead>',
    '          <tbody>' + (sourceRows || '<tr><td colspan="4" style="padding:10px;text-align:center;color:#94a3b8;">No data</td></tr>') + '</tbody>',
    '        </table>',
    '      </div>',
    '',
    '      <div style="text-align:center;margin-top:20px;">',
    '        <a href="' + data.dashboardUrl + '" target="_blank" style="background:#6366f1;color:#ffffff;text-decoration:none;padding:12px 24px;border-radius:6px;font-weight:700;font-size:13px;display:inline-block;">Open Live Master Spreadsheet</a>',
    '      </div>',
    '    </div>',
    '    <div style="background: #f8fafc; padding: 16px 20px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8; text-align: center;">',
    '      &copy; ' + new Date().getFullYear() + ' PROFIT MACHINES. Confidential Executive Analytics Report.<br>',
    '      Direct Inquiries: <strong>asmitha.int2027g3@gmail.com</strong>',
    '    </div>',
    '  </div>',
    '</body>',
    '</html>'
  ].join('\n');
}

function sendReportEmail(subject, htmlBody) {
  var remaining = getRemainingEmailQuota();
  if (remaining === 0) return;
  var recipients = uniqueEmails(EMAIL_CONFIG.reportEmails);
  var options = {
    to: recipients.join(","),
    subject: cleanEmailText(subject),
    htmlBody: htmlBody,
    name: EMAIL_CONFIG.name,
    replyTo: EMAIL_CONFIG.replyTo
  };
  var sent = sendEmailOnce(options);
  if (sent.ok) {
    console.log("Sent Executive Analytics Brief to: " + options.to);
  }
}

// =========================================================================================
// 9. FIELD RESOLVER & UTILITIES
// =========================================================================================

/**
 * Intelligently computes the true traffic attribution channel from UTMs, Referrer, and triggers.
 * Filters out internal development / AI chat links (e.g. chatgpt.com, claude.ai) so they never
 * appear as false marketing lead sources.
 */
function isIgnoredMarketingSource(val) {
  if (!val) return true;
  var low = String(val).toLowerCase().trim();
  return (
    low === "direct" ||
    low === "undefined" ||
    low === "null" ||
    low === "none" ||
    low.indexOf("chatgpt") !== -1 ||
    low.indexOf("openai") !== -1 ||
    low.indexOf("claude") !== -1 ||
    low.indexOf("anthropic") !== -1
  );
}

function cleanMarketingField(val) {
  if (!val) return "";
  var s = String(val).trim();
  if (isIgnoredMarketingSource(s)) return "";
  return s;
}

function computeAttributionSource(data) {
  var utmSource = (data.utm_source || data.utmSource || "").toString().trim();
  var utmMedium = (data.utm_medium || data.utmMedium || "").toString().trim();
  var utmCampaign = (data.utm_campaign || data.utmCampaign || "").toString().trim();
  var referrer = (data.referrer || data.referrer_url || data.Referrer || data.referrerHost || "").toString().trim();
  var explicitSource = (data.source || data.lead_source || data.trafficSource || data.traffic_source || "").toString().trim();

  // 1. UTM Attribution (Highest fidelity for marketing campaigns - ignore development AI referrers)
  if (!isIgnoredMarketingSource(utmSource)) {
    var sourceLabel = utmSource;
    if (utmMedium && !isIgnoredMarketingSource(utmMedium)) {
      sourceLabel += " / " + utmMedium;
    }
    if (utmCampaign && !isIgnoredMarketingSource(utmCampaign)) {
      sourceLabel += " (" + utmCampaign + ")";
    }
    return sourceLabel;
  }

  // 2. Referrer Attribution (Search engines, social media, external partners)
  if (!isIgnoredMarketingSource(referrer)) {
    var hostMatch = referrer.match(/^https?:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
    var host = hostMatch ? hostMatch[1].toLowerCase() : "";
    var isSelfDomain = host.indexOf("profit-max") !== -1 || 
                       host.indexOf("profitmachines") !== -1 || 
                       host.indexOf("localhost") !== -1 || 
                       host.indexOf("127.0.0.1") !== -1;
    if (!isSelfDomain && !isIgnoredMarketingSource(host)) {
      if (host.indexOf("google.") !== -1 || referrer.indexOf("google.") !== -1) return "Google / Organic";
      if (host.indexOf("bing.") !== -1 || referrer.indexOf("bing.") !== -1) return "Bing / Organic";
      if (host.indexOf("duckduckgo.") !== -1 || referrer.indexOf("duckduckgo.") !== -1) return "DuckDuckGo / Organic";
      if (host.indexOf("yahoo.") !== -1 || referrer.indexOf("yahoo.") !== -1) return "Yahoo / Organic";
      if (host.indexOf("baidu.") !== -1 || referrer.indexOf("baidu.") !== -1) return "Baidu / Organic";
      if (host.indexOf("linkedin.") !== -1 || host.indexOf("lnkd.in") !== -1) return "LinkedIn / Referral";
      if (host.indexOf("twitter.") !== -1 || host.indexOf("t.co") !== -1 || host.indexOf("x.com") !== -1) return "X (Twitter) / Social";
      if (host.indexOf("facebook.") !== -1 || host.indexOf("fb.me") !== -1) return "Facebook / Social";
      if (host.indexOf("instagram.") !== -1) return "Instagram / Social";
      if (host.indexOf("youtube.") !== -1 || host.indexOf("youtu.be") !== -1) return "YouTube / Social";
      if (host.indexOf("reddit.") !== -1) return "Reddit / Community";
      if (host.indexOf("github.") !== -1) return "GitHub / Referral";
      if (host.indexOf("trustgrid.") !== -1) return "TrustGrid / Ecosystem";

      if (host) {
        return "Referral (" + host.replace(/^www\./i, '') + ")";
      }
      return "External Referral";
    }
  }

  // 3. Explicit meaningful trigger passed from form UI (e.g. Hero Section, TalkToExpert Modal, Consultation Booking)
  if (!isIgnoredMarketingSource(explicitSource) && explicitSource !== "Website Inbound Form") {
    return explicitSource;
  }

  // 4. Default to Direct / Organic
  return "Direct / Organic";
}

function resolveField(header, data) {
  var computedSource = computeAttributionSource(data);
  var explicitMap = {
    "Name":                   data.name || data.fullName || data.full_name || data["Full Name"] || data["FullName"] || (data.firstName ? (data.firstName + (data.lastName ? " " + data.lastName : "")) : "") || "",
    "Full Name":              data.name || data.fullName || data.full_name || data["Full Name"] || data["FullName"] || (data.firstName ? (data.firstName + (data.lastName ? " " + data.lastName : "")) : "") || "",
    "Email":                  data.email || data.workEmail || data.work_email || data["Work Email"] || data["Corporate Email"] || (data.fields && (data.fields.email || data.fields.Email)) || "",
    "Work Email":             data.email || data.workEmail || data.work_email || data["Work Email"] || data["Corporate Email"] || (data.fields && (data.fields.email || data.fields.Email)) || "",
    "Corporate Email":        data.email || data.workEmail || data.work_email || data["Work Email"] || data["Corporate Email"] || (data.fields && (data.fields.email || data.fields.Email)) || "",
    "Phone":                  data.phone || data.phoneNumber || data.phone_number || data["Phone Number"] || data["Contact Number"] || "",
    "Phone Number":           data.phone || data.phoneNumber || data.phone_number || data["Phone Number"] || data["Contact Number"] || "",
    "Company":                data.company || data.companyName || data.company_name || data["Company Name"] || data["organization"] || "",
    "Company Name":           data.company || data.companyName || data.company_name || data["Company Name"] || data["organization"] || "",
    "Company / Org":          data.company || data.companyName || data.company_name || data["Company Name"] || data["organization"] || "",
    "Designation":            data.designation || data.role || data.jobTitle || data.job_title || data["Designation"] || data["Role"] || "",
    "Role":                   data.designation || data.role || data.jobTitle || data.job_title || data["Designation"] || data["Role"] || "",
    "Designation / Role":     data.designation || data.role || data.jobTitle || data.job_title || data["Designation"] || data["Role"] || "",
    "Role Applied":           data.role || data.roleApplied || data.jobTitle || data["Role Applied"] || "",
    "Job Title / Role":       data.jobTitle || data.role || data["Job Title / Role"] || "",
    "Job Title":              data.jobTitle || data.role || data["Job Title"] || "",
    "Interest / Solution":    data.interest || data.transformationInterest || data.serviceInterest || data.service || data["Interest"] || "",
    "Transformation Interest":data.transformationInterest || data.interest || data["Transformation Interest"] || "",
    "Focus Area":             data.focusArea || data.focus_area || data.interest || data["Focus Area"] || "",
    "Annual Revenue":         data.revenue || data.annualRevenue || data.annual_revenue || data.currentRevenue || data["Annual Revenue"] || "",
    "Current Revenue":        data.currentRevenue || data.revenue || data.annual_revenue || data["Current Revenue"] || "",
    "Timeline":               data.timeline || data.targetTimeline || data.target_timeline || data["Timeline"] || "",
    "Target Timeline":        data.targetTimeline || data.timeline || data.target_timeline || data["Target Timeline"] || "",
    "Urgency / Timeline":     data.urgency || data.timeline || data["Urgency"] || "",
    "Primary Challenge":      data.challenge || data.primaryChallenge || data.primary_challenge || data["Primary Challenge"] || "",
    "Primary Leakage Area":   data.primaryLeakageArea || data.leakageArea || data["Primary Leakage Area"] || "",
    "Estimated Leakage":      data.estimatedLeakage || data.leakage || data["Estimated Leakage"] || "",
    "Diagnostic Score":       data.diagnosticScore || data.score || data["Diagnostic Score"] || "",
    "Answers Summary":        typeof data.answersSummary === "object" ? JSON.stringify(data.answersSummary) : (data.answersSummary || data.answers || ""),
    "Partner Type":           data.partnerType || data.partner_type || data["Partner Type"] || "",
    "Primary Region":         data.region || data.primaryRegion || data["Primary Region"] || "",
    "Value Proposition / Proposal": data.proposal || data.valueProposition || data.message || data["Proposal"] || "",
    "Experience Level":       data.experienceLevel || data.experience || data["Experience Level"] || "",
    "Portfolio / LinkedIn":   data.portfolioUrl || data.portfolio || data.linkedin || data["Portfolio"] || "",
    "Cover Note / Message":   data.coverNote || data.coverLetter || data.message || "",
    "Topic / Intent":         data.intent || data.topic || data["Topic"] || "",
    "Chat Summary":           data.chatSummary || (typeof data.messages === "object" ? JSON.stringify(data.messages) : data.message) || "",
    "Subject":                data.subject || data.subjectLine || data["Subject"] || "",
    "Requirement / Inquiry":  data.requirement || data.message || data.requirementInquiry || data.inquiry || data.scope || "",
    "Requirement":            data.requirement || data.message || data.requirementInquiry || data.inquiry || data.scope || "",
    "Message":                data.message || data.yourMessage || data["Your Message"] || data["Message"] || "",
    "Message / Details":      data.message || data.details || data["Message"] || "",
    "Message / Scope":        data.message || data.scope || data.details || data["Message"] || "",
    "Status":                 data.status || "New Lead",
    "Variant":                data.variant || "Standard",
    "Submission ID":          data.submissionId || data.submission_id || data.id || ("PM_" + Date.now()),
    "Location":               data.location || data.ipLocation || data.ip_location || data["Location"] || data["IP Location"] || "",
    "Source":                 computedSource,
    "IP Location":            data.location || data.ipLocation || data.ip_location || data["IP Location"] || "",
    "IP Address":             data.ipAddress || data.ip_address || data["IP Address"] || "127.0.0.1",
    "Organization":           data.organization || data.company || data.company_name || data["Organization"] || "",
    "Session ID":             data.sessionId || data.session_id || data["Session ID"] || "",
    "Visitor ID":             data.visitorId || data.visitor_id || data["Visitor ID"] || "",
    "Page Path":              data.pagePath || data.page_url || data.page || data["Page Path"] || "",
    "Page Title":             data.pageTitle || data.page_title || data["Page Title"] || "",
    "Traffic Source":         computedSource,
    "Initial Source":         computedSource,
    "Referrer":               cleanMarketingField(data.referrer || data.referrer_url || documentReferrerFallback(data)),
    "Device":                 data.device || data.device_type || "Desktop",
    "Browser":                data.browser || "Chrome / Safari",
    "OS":                     data.os || data.operating_system || "Windows / macOS",
    "CTA Name":               data.ctaName || data.event_name || data.eventName || data["CTA Name"] || "",
    "Destination URL":        data.destinationUrl || data.page_url || data.pageUrl || "",
    "Section":                data.section || data.event_category || "General",
    "UTM Source":             cleanMarketingField(data.utmSource || data.utm_source),
    "UTM Medium":             cleanMarketingField(data.utmMedium || data.utm_medium),
    "UTM Campaign":           cleanMarketingField(data.utmCampaign || data.utm_campaign),
    "UTM Term":               cleanMarketingField(data.utmTerm || data.utm_term),
    "UTM Content":            cleanMarketingField(data.utmContent || data.utm_content),
    "Timestamp":              normalizeTimestamp(data.timestamp || data.Timestamp || new Date().toISOString())
  };
  
  if (explicitMap.hasOwnProperty(header)) {
    var val = explicitMap[header];
    return (val !== null && typeof val === 'object') ? JSON.stringify(val) : (val === undefined ? "" : val);
  }
  
  var slug = header
    .replace(/\(.*?\)/g, '')
    .trim()
    .split(' ')
    .map(function(word, i) {
      if (i === 0) return word.charAt(0).toLowerCase() + word.slice(1);
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
    
  var value = data[slug];
  if (value === undefined) value = data[header];
  if (value === undefined) value = data[header.toLowerCase().replace(/\s+/g, '_')];
  if (value === undefined) value = "";
  
  return (value !== null && typeof value === 'object') ? JSON.stringify(value) : value;
}


function documentReferrerFallback(data) {
  return data.referrer || data.referrer_url || "";
}

function normalizeTimestamp(ts) {
  if (!ts) return new Date().toISOString();
  if (typeof ts === 'string' && ts.includes('IST')) return ts;
  var ms = Date.now();
  if (typeof ts === 'number' || (typeof ts === 'string' && /^\d{10,13}$/.test(ts))) {
    ms = Number(ts);
    if (ms < 1e12) ms = ms * 1000;
  } else if (ts instanceof Date) {
    ms = ts.getTime();
  }
  var istOffset = 5.5 * 60 * 60 * 1000;
  var ist = new Date(ms + istOffset);
  var yyyy = ist.getUTCFullYear();
  var mm   = String(ist.getUTCMonth() + 1).padStart(2, '0');
  var dd   = String(ist.getUTCDate()).padStart(2, '0');
  var hh   = String(ist.getUTCHours()).padStart(2, '0');
  var min  = String(ist.getUTCMinutes()).padStart(2, '0');
  var ss   = String(ist.getUTCSeconds()).padStart(2, '0');
  return yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + min + ':' + ss + ' IST';
}

function calculateDelta(cur, prev) {
  if (!prev || prev === 0) return cur > 0 ? "+100%" : "0.0%";
  var change = ((cur - prev) / prev) * 100;
  return (change >= 0 ? "+" : "") + change.toFixed(1) + "%";
}

function formatNum(num) {
  if (num === null || num === undefined || isNaN(num)) return "0";
  return Number(num).toLocaleString("en-IN");
}

function parseSheetDate(val) {
  if (!val) return null;
  if (val instanceof Date) return val;
  var str = String(val);
  if (str.match(/^\d{4}-\d{2}-\d{2}/)) {
    return new Date(str.substring(0, 10));
  }
  var match = str.match(/^(\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{4})/);
  if (match) {
    var months = {'Jan':0,'Feb':1,'Mar':2,'Apr':3,'May':4,'Jun':5,'Jul':6,'Aug':7,'Sep':8,'Oct':9,'Nov':10,'Dec':11};
    return new Date(match[3], months[match[2]], match[1]);
  }
  return new Date(str);
}

function normalizeTrafficSource(src, utmSrc) {
  var s = String(src || utmSrc || "").toLowerCase().trim();
  if (s.indexOf("google_ad") !== -1 || s.indexOf("cpc") !== -1 || s.indexOf("adwords") !== -1) return "Google Ads";
  if (s.indexOf("linkedin") !== -1) return "LinkedIn";
  if (s.indexOf("twitter") !== -1 || s.indexOf("x.com") !== -1) return "X / Twitter";
  if (s.indexOf("organic") !== -1 || s.indexOf("google") !== -1 || s.indexOf("search") !== -1) return "Organic Search";
  if (s.indexOf("referral") !== -1) return "Referral";
  return "Direct / Unknown";
}

function resolvePageName(path) {
  var clean = normalizeRoutePath(path);
  return clean;
}

// =========================================================================================
// 10. SETUP TRIGGERS & ONE-CLICK NOTIFICATION PREVIEW SUITE
// =========================================================================================

function setupAllProfitMachinesTriggers() {
  var triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(function(t) { ScriptApp.deleteTrigger(t); });

  // 1. Daily Report at 8:30 AM IST
  ScriptApp.newTrigger("dailyReport")
    .timeBased()
    .everyDays(1)
    .atHour(8)
    .create();

  // 2. Weekly Report on Friday at 8:30 AM IST
  ScriptApp.newTrigger("weeklyReport")
    .timeBased()
    .onWeekDay(ScriptApp.WeekDay.FRIDAY)
    .atHour(8)
    .create();

  // 3. Monthly Report on 1st of month at 8:30 AM IST
  ScriptApp.newTrigger("monthlyReport")
    .timeBased()
    .onMonthDay(1)
    .atHour(8)
    .create();

  // 4. Monthly Career Applications Trigger on 1st of month at 9:00 AM IST
  ScriptApp.newTrigger("forwardMonthlyCareerApplications")
    .timeBased()
    .onMonthDay(1)
    .atHour(9)
    .create();

  console.log("All PROFIT MACHINES automation triggers successfully scheduled.");
}

/**
 * ⚠️ TEST-ONLY — MANUAL TRIGGER, NEVER SCHEDULED, NEVER TOUCHES REAL SHEET DATA.
 * Sends hardcoded [PREVIEW]-prefixed sample emails so a human can visually check the HTML
 * templates render correctly. It is NOT wired to setupAllProfitMachinesTriggers() and must never
 * be added to a time-based trigger — run it only manually from the Apps Script editor.
 * Real automated reports (dailyReport/weeklyReport/monthlyReport) always pull live data via
 * aggregateExecutiveReportData() and never call this function.
 */
function SEND_ALL_PROFIT_MACHINES_NOTIFICATION_PREVIEWS() {
  var recipients = EMAIL_CONFIG.reportEmails.join(",");
  var mockSheetUrl = "https://docs.google.com/spreadsheets/d/" + CONFIG.MAIN_SPREADSHEET_ID + "/edit";
  console.log("Dispatching all PROFIT MACHINES preview notifications to: " + recipients);

  var samplePdfBlob = Utilities.newBlob("Sample Candidate Resume - PROFIT MACHINES AI/ML Research Engineer", "application/pdf", "Poojasri_Resume.pdf");

  // 1. AI Diagnostic Sample (Consulting Sessions)
  var dData = {
    fullName: "Arjun Mehta",
    workEmail: "arjun.m@fintechcorp.com",
    companyName: "FinTech Corp Global",
    primaryAiStack: "LangChain, LlamaIndex, OpenAI GPT-4o",
    governancePriority: "Agent Hallucination Prevention & Audit Trails",
    timeline: "Immediate (Q3 Deployment)",
    location: "Bengaluru, India",
    ipAddress: "49.37.12.89",
    timestamp: new Date().toISOString()
  };
  var dMeta = getLeadCategoryMeta("AI_Diagnostic_Leads", dData);
  MailApp.sendEmail({
    to: recipients,
    subject: "[PREVIEW] " + dMeta.internalSubject,
    htmlBody: buildInternalLeadHtml(dMeta, dData, mockSheetUrl),
    name: EMAIL_CONFIG.name,
    replyTo: EMAIL_CONFIG.replyTo
  });

  // 2. Career Application Sample with Resume
  var cData = {
    name: "Poojasri",
    email: "asmitha.int2027g3@gmail.com",
    phone: "+91 98765 43210",
    jobTitle: "AI/ML Governance & Red Teaming Engineer",
    coverLetter: "Passionate about autonomous agent safety, adversarial LLM testing, and building trustworthy AI architectures.",
    resumeFileName: "Poojasri_Resume.pdf",
    resumeDriveLink: "https://drive.google.com",
    location: "Hyderabad, India",
    ipAddress: "106.51.78.22",
    timestamp: new Date().toISOString()
  };
  var cMeta = getLeadCategoryMeta("Career_Applications", cData);
  MailApp.sendEmail({
    to: recipients,
    subject: "[PREVIEW] " + cMeta.internalSubject,
    htmlBody: buildInternalLeadHtml(cMeta, cData, mockSheetUrl),
    name: EMAIL_CONFIG.name,
    replyTo: EMAIL_CONFIG.replyTo,
    attachments: [samplePdfBlob]
  });

  // 3. Enterprise Contact Inquiry Sample (Consulting Sessions)
  var cntData = {
    name: "Vikram Malhotra",
    email: "vikram@enterprise-cloud.io",
    company: "Enterprise Cloud AI",
    subject: "EU AI Act Compliance & Model Security Audit",
    message: "We need comprehensive automated governance for 15 production LLM microservices.",
    location: "Mumbai, India",
    ipAddress: "115.112.45.10",
    timestamp: new Date().toISOString()
  };
  var cntMeta = getLeadCategoryMeta("Contact_Leads", cntData);
  MailApp.sendEmail({
    to: recipients,
    subject: "[PREVIEW] " + cntMeta.internalSubject,
    htmlBody: buildInternalLeadHtml(cntMeta, cntData, mockSheetUrl),
    name: EMAIL_CONFIG.name,
    replyTo: EMAIL_CONFIG.replyTo
  });

  // 4. Daily Analytics Report Sample (Merged Trend + Clean Top Engaged Pages)
  var dailyTrendLabels = ["00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00"];
  var dailyTrendVisitors = [45, 28, 62, 185, 240, 195, 125, 60];
  var dailyTrendLeads = [0, 0, 1, 2, 3, 2, 1, 0];
  var dailyChartUrl = generateMergedTrendChartUrl(dailyTrendLabels, dailyTrendVisitors, dailyTrendLeads);

  var sampleDailyData = {
    periodType: "DAILY",
    periodDateStr: Utilities.formatDate(new Date(), "Asia/Kolkata", "d MMMM yyyy"),
    periodRangeStr: Utilities.formatDate(new Date(), "Asia/Kolkata", "d MMM yyyy"),
    kpis: {
      visitors: 842,
      sessions: 1120,
      leads: 9,
      enquiries: 14,
      conversionRate: "2.14%",
      topLeadSource: "Google Search (Organic)"
    },
    comparison: {
      visitorsDelta: "+18.4%",
      sessionsDelta: "+14.2%",
      leadsDelta: "+28.6%",
      enquiriesDelta: "+16.7%",
      prevVisitors: 711,
      prevLeads: 7,
      prevEnquiries: 12,
      prevConvRate: "1.98%"
    },
    trend: {
      labels: dailyTrendLabels,
      visitors: dailyTrendVisitors,
      leads: dailyTrendLeads,
      chartUrl: dailyChartUrl
    },
    formBreakdown: {
      "Quick Forms": 3,
      "Consulting Sessions": 6
    },
    sources: [
      { source: "Google / Organic", visitors: 420, leads: 5, enquiries: 7, convRate: "2.38%" },
      { source: "LinkedIn / Sponsored", visitors: 240, leads: 3, enquiries: 4, convRate: "2.50%" },
      { source: "Direct / Navigational", visitors: 112, leads: 1, enquiries: 2, convRate: "1.79%" },
      { source: "Twitter / X Referral", visitors: 70, leads: 0, enquiries: 1, convRate: "0.00%" }
    ],
    topPages: [
      { path: "/", views: 9, leads: 0 },
      { path: "/solutions/ai-infra-engineering", views: 8, leads: 0 },
      { path: "/solutions/ai-value-engineering", views: 5, leads: 0 },
      { path: "/solutions/ai-agentic-factory", views: 4, leads: 0 },
      { path: "/solutions/ai-cybersecurity-quantum-safe", views: 3, leads: 0 },
      { path: "/methodology-engine", views: 2, leads: 0 },
      { path: "/contact", views: 1, leads: 0 },
      { path: "/solutions/ai-networking", views: 1, leads: 0 }
    ],
    dashboardUrl: mockSheetUrl
  };
  var dailyHtml = buildExecutiveAnalyticsBriefHtml(sampleDailyData, "DAILY");
  MailApp.sendEmail({
    to: recipients,
    subject: "[PREVIEW] [PROFIT MACHINES] Daily Analytics Report - " + sampleDailyData.periodDateStr,
    htmlBody: dailyHtml,
    name: EMAIL_CONFIG.name,
    replyTo: EMAIL_CONFIG.replyTo
  });

  // 5. Weekly Analytics Report Sample (Merged Trend + Clean Top Engaged Pages)
  var now = new Date();
  var wStart = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  var weeklyTrendLabels = ["12 Sep", "13 Sep", "14 Sep", "15 Sep", "16 Sep", "17 Sep", "18 Sep"];
  var weeklyTrendVisitors = [680, 740, 810, 890, 920, 860, 720];
  var weeklyTrendLeads = [8, 9, 11, 12, 14, 10, 4];
  var weeklyChartUrl = generateMergedTrendChartUrl(weeklyTrendLabels, weeklyTrendVisitors, weeklyTrendLeads);

  var sampleWeeklyData = {
    periodType: "WEEKLY",
    periodDateStr: Utilities.formatDate(wStart, "Asia/Kolkata", "d MMM") + " - " + Utilities.formatDate(now, "Asia/Kolkata", "d MMM yyyy"),
    periodRangeStr: Utilities.formatDate(wStart, "Asia/Kolkata", "d MMM yyyy") + " - " + Utilities.formatDate(now, "Asia/Kolkata", "d MMM yyyy"),
    kpis: {
      visitors: 5620,
      sessions: 7840,
      leads: 68,
      enquiries: 94,
      conversionRate: "2.41%",
      topLeadSource: "Google Organic & LinkedIn Ads"
    },
    comparison: {
      visitorsDelta: "+24.8%",
      sessionsDelta: "+21.3%",
      leadsDelta: "+36.0%",
      enquiriesDelta: "+22.1%",
      prevVisitors: 4503,
      prevLeads: 50,
      prevEnquiries: 77,
      prevConvRate: "2.22%"
    },
    trend: {
      labels: weeklyTrendLabels,
      visitors: weeklyTrendVisitors,
      leads: weeklyTrendLeads,
      chartUrl: weeklyChartUrl
    },
    formBreakdown: {
      "Quick Forms": 26,
      "Consulting Sessions": 42
    },
    sources: [
      { source: "Google / Organic", visitors: 2680, leads: 34, enquiries: 46, convRate: "2.54%" },
      { source: "LinkedIn Ads / Enterprise", visitors: 1640, leads: 22, enquiries: 30, convRate: "2.68%" },
      { source: "Direct Traffic", visitors: 820, leads: 8, enquiries: 12, convRate: "1.95%" },
      { source: "Industry Newsletter & PR", visitors: 480, leads: 4, enquiries: 6, convRate: "1.67%" }
    ],
    topPages: [
      { path: "/", views: 64, leads: 5 },
      { path: "/solutions/ai-infra-engineering", views: 52, leads: 12 },
      { path: "/solutions/ai-value-engineering", views: 38, leads: 8 },
      { path: "/solutions/ai-agentic-factory", views: 31, leads: 6 },
      { path: "/solutions/ai-cybersecurity-quantum-safe", views: 24, leads: 4 },
      { path: "/methodology-engine", views: 18, leads: 2 },
      { path: "/contact", views: 14, leads: 1 },
      { path: "/solutions/ai-networking", views: 12, leads: 1 }
    ],
    dashboardUrl: mockSheetUrl
  };
  var weeklyHtml = buildExecutiveAnalyticsBriefHtml(sampleWeeklyData, "WEEKLY");
  MailApp.sendEmail({
    to: recipients,
    subject: "[PREVIEW] [PROFIT MACHINES] Weekly Analytics Report - " + sampleWeeklyData.periodRangeStr,
    htmlBody: weeklyHtml,
    name: EMAIL_CONFIG.name,
    replyTo: EMAIL_CONFIG.replyTo
  });

  console.log("All sample preview emails successfully sent to " + recipients);
}

// =========================================================================================
// 11. ONE-CLICK DATABASE INITIALIZATION SUITE
// =========================================================================================

/**
 * Creates and formats the exact 95-Column 'Live_Traffic_Events' Telemetry Sheet
 */
function initializeMasterTelemetrySheet() {
  var ss = SpreadsheetApp.openById(CONFIG.MAIN_SPREADSHEET_ID);
  var sheet = findSheetFlexible(ss, "Live_Traffic_Events");
  if (!sheet) {
    sheet = ss.insertSheet("Live_Traffic_Events", 0);
  }
  sheet.clear();
  sheet.getRange(1, 1, 1, SCHEMA_95_HEADERS.length)
       .setValues([SCHEMA_95_HEADERS])
       .setFontWeight("bold")
       .setBackground("#060e22")
       .setFontColor("#38bdf8")
       .setHorizontalAlignment("center");
  sheet.setFrozenRows(1);
  try {
    sheet.autoResizeColumns(1, Math.min(30, SCHEMA_95_HEADERS.length));
  } catch (e) {}

  console.log("Successfully initialized 95-Column 'Live_Traffic_Events' Master Telemetry Sheet.");
}

/**
 * Pre-creates and formats all 20 dedicated database tabs in Sheet 1
 */
function initializeAllDatabaseTables() {
  var ss = SpreadsheetApp.openById(CONFIG.MAIN_SPREADSHEET_ID);
  
  // 1. Initialize Master Telemetry
  initializeMasterTelemetrySheet();

  // 2. Initialize All Dedicated Lead & Event Tabs
  Object.keys(TAB_CONFIGS).forEach(function(tabKey) {
    if (tabKey === "Live_Traffic_Events") return;
    var sheet = findSheetFlexible(ss, tabKey);
    var headers = TAB_CONFIGS[tabKey];
    if (!sheet) {
      sheet = ss.insertSheet(tabKey);
    }
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, headers.length)
           .setValues([headers])
           .setFontWeight("bold")
           .setBackground("#0f172a")
           .setFontColor("#ffffff");
      sheet.setFrozenRows(1);
    }
  });

  console.log("All 14 Profit Machines database tabs initialized with enterprise styling.");
}

// =========================================================================================
// 12. ENTERPRISE USER REGISTRATION, AUTHENTICATION & CALCULATOR EXTENSIONS
// =========================================================================================

/**
 * Checks whether a User ID or Business Email is already registered in 'User_Credentials' or 'User_Registration'.
 */
function handleCheckUserExists(ss, data) {
  try {
    var checkEmail = (data.email || data.businessEmail || "").toString().trim().toLowerCase();
    var checkUserId = (data.userId || data.preferredUserId || "").toString().trim().toLowerCase();

    if (!checkEmail && !checkUserId) {
      return { status: "success", exists: false, field: null };
    }

    // Check User_Credentials first
    var credSheet = findSheetFlexible(ss, "User_Credentials");
    if (credSheet && credSheet.getLastRow() > 1) {
      var credValues = credSheet.getRange(2, 1, credSheet.getLastRow() - 1, Math.min(2, credSheet.getLastColumn())).getValues();
      for (var c = 0; c < credValues.length; c++) {
        var cUserId = (credValues[c][0] || "").toString().trim().toLowerCase();
        var cEmail = (credValues[c][1] || "").toString().trim().toLowerCase();
        if (checkUserId && cUserId === checkUserId) {
          return { status: "success", exists: true, field: "userId", message: "User ID '" + data.userId + "' is already registered." };
        }
        if (checkEmail && cEmail === checkEmail) {
          return { status: "success", exists: true, field: "email", message: "Business Email '" + data.email + "' is already registered." };
        }
      }
    }

    // Check User_Registration
    var sheet = findSheetFlexible(ss, "User_Registration");
    if (sheet && sheet.getLastRow() > 1) {
      var lastRow = sheet.getLastRow();
      var values = sheet.getRange(2, 1, lastRow - 1, sheet.getLastColumn()).getValues();

      // Col 3: Business Email (index 2), Col 5: Preferred User ID (index 4)
      for (var i = 0; i < values.length; i++) {
        var rowEmail = (values[i][2] || "").toString().trim().toLowerCase();
        var rowUserId = (values[i][4] || "").toString().trim().toLowerCase();

        if (checkUserId && rowUserId === checkUserId) {
          return { status: "success", exists: true, field: "userId", message: "User ID '" + data.userId + "' is already registered." };
        }
        if (checkEmail && rowEmail === checkEmail) {
          return { status: "success", exists: true, field: "email", message: "Business Email '" + data.email + "' is already registered." };
        }
      }
    }

    return { status: "success", exists: false, field: null };
  } catch (err) {
    console.error("Error in handleCheckUserExists: " + err.toString());
    return { status: "error", message: err.toString(), exists: false };
  }
}

/**
 * Handles two-step enterprise user registration:
 * 1. Logs full company profile to 'User_Registration' tab.
 * 2. Logs User ID & Password to 'User_Credentials' tab for cross-device authentication validation.
 * 3. Dispatches confirmation emails to user and alerts admins.
 */
function handleUserRegistration(ss, data) {
  try {
    var check = handleCheckUserExists(ss, data);
    if (check.exists) {
      return {
        status: "error",
        code: "DUPLICATE_USER",
        field: check.field,
        message: check.message || "User ID or Business Email is already registered."
      };
    }

    var sheet = findSheetFlexible(ss, "User_Registration");
    var defaultHeaders = TAB_CONFIGS["User_Registration"];

    if (!sheet) {
      sheet = ss.insertSheet("User_Registration");
      sheet.getRange(1, 1, 1, defaultHeaders.length)
           .setValues([defaultHeaders])
           .setFontWeight("bold")
           .setBackground("#0f172a")
           .setFontColor("#ffffff");
      sheet.setFrozenRows(1);
    } else if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, defaultHeaders.length)
           .setValues([defaultHeaders])
           .setFontWeight("bold")
           .setBackground("#0f172a")
           .setFontColor("#ffffff");
      sheet.setFrozenRows(1);
    }

    var regId = data.registrationId || ("PM-REG-" + Utilities.formatDate(new Date(), "GMT+05:30", "yyyyMMdd") + "-" + Math.floor(1000 + Math.random() * 9000));
    var fullName = (data.fullName || data.name || "").toString().trim();
    var email = (data.email || data.businessEmail || "").toString().trim();
    var mobile = (data.mobile || data.phone || "").toString().trim();
    var userId = (data.userId || data.preferredUserId || "").toString().trim();
    var company = (data.company || data.companyName || "").toString().trim();
    var website = (data.website || data.officialWebsite || "").toString().trim();
    var country = (data.country || "").toString().trim();
    var state = (data.state || data.region || "").toString().trim();
    var city = (data.city || "").toString().trim();
    var industry = (data.industry || data.industrySector || "").toString().trim();
    var subIndustry = (data.subIndustry || "").toString().trim();
    var headcount = (data.headcount || data.companyHeadcount || "").toString().trim();
    var operations = Array.isArray(data.operations) ? data.operations.join(", ") : (data.operations || data.businessOperations || "").toString().trim();
    var consent = data.consent ? "Accepted: Terms & Privacy" : "Accepted";
    var regDate = Utilities.formatDate(new Date(), "GMT+05:30", "yyyy-MM-dd HH:mm:ss");
    var status = "Active";

    var newRow = [
      regId, fullName, email, mobile, userId, company, website,
      country, state, city, industry, subIndustry, headcount,
      operations, consent, regDate, status
    ];

    sheet.appendRow(newRow);

    // 2. Write to 'User_Credentials' Tab (Option B: Visible & Centralized Validation)
    try {
      var credSheet = findSheetFlexible(ss, "User_Credentials");
      var credHeaders = TAB_CONFIGS["User_Credentials"];
      if (!credSheet) {
        credSheet = ss.insertSheet("User_Credentials");
        credSheet.getRange(1, 1, 1, credHeaders.length)
                 .setValues([credHeaders])
                 .setFontWeight("bold")
                 .setBackground("#0f172a")
                 .setFontColor("#ffffff");
        credSheet.setFrozenRows(1);
      } else if (credSheet.getLastRow() === 0) {
        credSheet.getRange(1, 1, 1, credHeaders.length)
                 .setValues([credHeaders])
                 .setFontWeight("bold")
                 .setBackground("#0f172a")
                 .setFontColor("#ffffff");
        credSheet.setFrozenRows(1);
      }

      var userPassword = (data.password || "").toString().trim();
      var credRow = [
        userId, email, fullName, userPassword, regDate, status, ""
      ];
      credSheet.appendRow(credRow);
    } catch (credErr) {
      console.warn("Could not write to User_Credentials: " + credErr.toString());
    }

    // 3. Dispatch Registration Confirmation Email to the Registered User
    sendUserRegistrationConfirmationEmail(email, fullName, userId);

    // 4. Dispatch New Registration Alert to Admin Team (poojasri@trustgrid.ai & asmitha.int2027g3@gmail.com)
    sendAdminNewRegistrationNotification({
      registrationId: regId,
      fullName: fullName,
      email: email,
      mobile: mobile,
      userId: userId,
      company: company,
      website: website,
      country: country,
      state: state,
      city: city,
      industry: industry,
      subIndustry: subIndustry,
      headcount: headcount,
      operations: operations,
      registrationDate: regDate
    });

    return {
      status: "success",
      registrationId: regId,
      userId: userId,
      email: email,
      message: "Account created successfully. Credentials saved in User_Credentials tab."
    };
  } catch (err) {
    console.error("Error in handleUserRegistration: " + err.toString());
    return { status: "error", message: err.toString() };
  }
}

/**
 * Validates user credentials against 'User_Credentials' tab in Google Sheets.
 * If credentials match, records successful login in 'Login_Activity' and returns user profile.
 */
function handleVerifyLogin(ss, data) {
  try {
    var sheet = findSheetFlexible(ss, "User_Credentials");
    var identifier = (data.identifier || data.userId || data.email || data.businessEmail || "").toString().trim();
    var cleanId = identifier.toLowerCase();
    var inputPassword = (data.password || "").toString().trim();

    if (!identifier || !inputPassword) {
      return {
        status: "error",
        code: "MISSING_FIELDS",
        message: "Please enter both User ID / Business Email and Password."
      };
    }

    if (!sheet || sheet.getLastRow() <= 1) {
      handleLoginActivity(ss, {
        userId: identifier,
        fullName: "Unknown Visitor",
        email: identifier.indexOf("@") !== -1 ? identifier : "",
        loginStatus: "Failed: User_Credentials tab is empty"
      });
      return {
        status: "error",
        code: "USER_NOT_FOUND",
        message: "No registered accounts found in credentials vault. Please create an account."
      };
    }

    var lastRow = sheet.getLastRow();
    var colCount = sheet.getLastColumn();
    var values = sheet.getRange(2, 1, lastRow - 1, colCount).getValues();

    for (var i = 0; i < values.length; i++) {
      var rowUserId = (values[i][0] || "").toString().trim();
      var rowEmail = (values[i][1] || "").toString().trim();
      var rowFullName = (values[i][2] || "").toString().trim();
      var rowPassword = (values[i][3] || "").toString().trim();
      var rowStatus = (values[i][5] || "Active").toString().trim();

      if (rowUserId.toLowerCase() === cleanId || rowEmail.toLowerCase() === cleanId) {
        if (rowStatus.toLowerCase() === "suspended" || rowStatus.toLowerCase() === "blocked") {
          return {
            status: "error",
            code: "ACCOUNT_SUSPENDED",
            message: "Account is inactive or suspended. Please contact ProfitMachines support."
          };
        }

        if (rowPassword === inputPassword) {
          // Password is correct! Update Last Login Date in Column 7
          var loginTimestamp = Utilities.formatDate(new Date(), "GMT+05:30", "yyyy-MM-dd HH:mm:ss");
          sheet.getRange(i + 2, 7).setValue(loginTimestamp);

          // Retrieve extra profile info from User_Registration if available
          var company = "";
          var country = "";
          var industry = "";
          var mobile = "";
          var regSheet = findSheetFlexible(ss, "User_Registration");
          if (regSheet && regSheet.getLastRow() > 1) {
            var regVals = regSheet.getRange(2, 1, regSheet.getLastRow() - 1, regSheet.getLastColumn()).getValues();
            for (var r = 0; r < regVals.length; r++) {
              var rEmail = (regVals[r][2] || "").toString().trim().toLowerCase();
              var rUserId = (regVals[r][4] || "").toString().trim().toLowerCase();
              if (rUserId === rowUserId.toLowerCase() || rEmail === rowEmail.toLowerCase()) {
                mobile = (regVals[r][3] || "").toString();
                company = (regVals[r][5] || "").toString();
                country = (regVals[r][7] || "").toString();
                industry = (regVals[r][10] || "").toString();
                break;
              }
            }
          }

          // Record successful login in Login_Activity
          handleLoginActivity(ss, {
            userId: rowUserId,
            fullName: rowFullName,
            email: rowEmail,
            loginStatus: "Success"
          });

          return {
            status: "success",
            user: {
              userId: rowUserId,
              email: rowEmail,
              fullName: rowFullName,
              mobile: mobile,
              company: company,
              country: country,
              industry: industry,
              accountStatus: rowStatus
            },
            message: "Authentication successful."
          };
        } else {
          // Password incorrect
          handleLoginActivity(ss, {
            userId: rowUserId,
            fullName: rowFullName,
            email: rowEmail,
            loginStatus: "Failed: Invalid Password"
          });
          return {
            status: "error",
            code: "INVALID_PASSWORD",
            message: "Incorrect password. Please verify your credentials and try again."
          };
        }
      }
    }

    // User not found
    handleLoginActivity(ss, {
      userId: identifier,
      fullName: "Unknown Visitor",
      email: identifier.indexOf("@") !== -1 ? identifier : "",
      loginStatus: "Failed: Account Not Found"
    });
    return {
      status: "error",
      code: "USER_NOT_FOUND",
      message: "Account not found. Please check your User ID / Business Email or create an account."
    };
  } catch (err) {
    console.error("Error in handleVerifyLogin: " + err.toString());
    return { status: "error", message: err.toString() };
  }
}

/**
 * Handles recording login activity to the 'Login_Activity' tab and alerts admin on success.
 */
function handleLoginActivity(ss, data) {
  try {
    var sheet = findSheetFlexible(ss, "Login_Activity");
    var defaultHeaders = TAB_CONFIGS["Login_Activity"];

    if (!sheet) {
      sheet = ss.insertSheet("Login_Activity");
      sheet.getRange(1, 1, 1, defaultHeaders.length)
           .setValues([defaultHeaders])
           .setFontWeight("bold")
           .setBackground("#0f172a")
           .setFontColor("#ffffff");
      sheet.setFrozenRows(1);
    } else if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, defaultHeaders.length)
           .setValues([defaultHeaders])
           .setFontWeight("bold")
           .setBackground("#0f172a")
           .setFontColor("#ffffff");
      sheet.setFrozenRows(1);
    }

    var actId = data.activityId || ("PM-LOG-" + Utilities.formatDate(new Date(), "GMT+05:30", "yyyyMMdd") + "-" + Math.floor(1000 + Math.random() * 9000));
    var userId = (data.userId || data.preferredUserId || "").toString().trim();
    var fullName = (data.fullName || data.name || "").toString().trim();
    var email = (data.email || data.businessEmail || "").toString().trim();
    var loginDate = Utilities.formatDate(new Date(), "GMT+05:30", "yyyy-MM-dd");
    var loginTime = Utilities.formatDate(new Date(), "GMT+05:30", "HH:mm:ss");
    var loginStatus = (data.loginStatus || data.status || "Success").toString().trim();
    var logoutTime = (data.logoutTime || "").toString().trim();

    var newRow = [
      actId, userId, fullName, email, loginDate, loginTime, loginStatus, logoutTime
    ];

    sheet.appendRow(newRow);

    // Alert Admin upon successful sign-in
    if (loginStatus.toLowerCase().indexOf("success") !== -1) {
      sendAdminLoginNotification({
        activityId: actId,
        userId: userId,
        fullName: fullName,
        email: email,
        loginDate: loginDate,
        loginTime: loginTime,
        loginStatus: loginStatus,
        ipAddress: data.ipAddress || data.ip || "N/A"
      });
    }

    return { status: "success", activityId: actId, message: "Login activity recorded" };
  } catch (err) {
    console.error("Error in handleLoginActivity: " + err.toString());
    return { status: "error", message: err.toString() };
  }
}

/**
 * Handles recording Sales Calculator usage to the 'Calculator_Activity' tab.
 */
function handleCalculatorActivity(ss, data) {
  try {
    var sheet = findSheetFlexible(ss, "Calculator_Activity");
    var defaultHeaders = TAB_CONFIGS["Calculator_Activity"];

    if (!sheet) {
      sheet = ss.insertSheet("Calculator_Activity");
      sheet.getRange(1, 1, 1, defaultHeaders.length)
           .setValues([defaultHeaders])
           .setFontWeight("bold")
           .setBackground("#0f172a")
           .setFontColor("#ffffff");
      sheet.setFrozenRows(1);
    } else if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, defaultHeaders.length)
           .setValues([defaultHeaders])
           .setFontWeight("bold")
           .setBackground("#0f172a")
           .setFontColor("#ffffff");
      sheet.setFrozenRows(1);
    }

    var actId = data.activityId || ("PM-CALC-" + Utilities.formatDate(new Date(), "GMT+05:30", "yyyyMMdd") + "-" + Math.floor(1000 + Math.random() * 9000));
    var userId = (data.userId || "").toString().trim();
    var fullName = (data.fullName || data.name || "").toString().trim();
    var email = (data.email || "").toString().trim();
    var calcName = (data.calculatorName || data.name || "Sales Velocity Calculator").toString().trim();
    var actDate = Utilities.formatDate(new Date(), "GMT+05:30", "yyyy-MM-dd HH:mm:ss");
    var actType = (data.activityType || data.type || "Compute").toString().trim();

    var newRow = [
      actId, userId, fullName, email, calcName, actDate, actType
    ];

    sheet.appendRow(newRow);
    return { status: "success", activityId: actId, message: "Calculator activity logged" };
  } catch (err) {
    console.error("Error in handleCalculatorActivity: " + err.toString());
    return { status: "error", message: err.toString() };
  }
}

/**
 * Sends branded User Registration Confirmation Email to the new user.
 */
function sendUserRegistrationConfirmationEmail(userEmail, userName, userId) {
  if (!userEmail || userEmail.indexOf("@") === -1) return;

  var signInUrl = (EMAIL_CONFIG.website || "https://profit-max-delta.vercel.app") + "/sign-in";
  var subject = "Welcome to ProfitMachines — Account Confirmed & Executive Access Granted";

  var plainBody = "Dear " + (userName || "Executive Leader") + ",\n\n" +
    "Welcome to ProfitMachines. Your enterprise account has been successfully created.\n\n" +
    "ACCOUNT DETAILS:\n" +
    "-----------------------------------------\n" +
    "Full Name: " + userName + "\n" +
    "Registered User ID: " + userId + "\n" +
    "Business Email: " + userEmail + "\n" +
    "Sign In Portal: " + signInUrl + "\n\n" +
    "You now have verified access to our exclusive Sales Calculators, proprietary revenue acceleration models, and commercial telemetry.\n\n" +
    "Sign in to your account at: " + signInUrl + "\n\n" +
    "For enterprise inquiries or technical assistance, contact connect@trustgrid.ai or poojasri@trustgrid.ai.\n\n" +
    "Security Notice: Your password is encrypted and never stored in plain text or transmitted via email.\n\n" +
    "Warm regards,\n" +
    "The ProfitMachines Leadership & Solutions Team";

  var htmlBody = "<!DOCTYPE html><html><head><meta charset='UTF-8'></head>" +
    "<body style='font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,sans-serif; background-color:#090d16; color:#f8fafc; margin:0; padding:30px 10px;'>" +
    "<div style='max-width:600px; margin:0 auto; background:#0f172a; border:1px solid #1e293b; border-radius:16px; overflow:hidden; box-shadow:0 20px 40px rgba(0,0,0,0.5);'>" +
    
    // Header
    "<div style='background:linear-gradient(135deg,#0b1329,#1e293b); padding:28px 32px; border-bottom:1px solid #334155; text-align:left;'>" +
    "<span style='background:#2563eb; color:#ffffff; font-size:10px; font-weight:800; letter-spacing:0.15em; padding:4px 10px; border-radius:6px; text-transform:uppercase;'>PROFITMACHINES ENTERPRISE</span>" +
    "<h1 style='margin:16px 0 4px 0; color:#ffffff; font-size:22px; font-weight:800; letter-spacing:-0.02em;'>Account Confirmed & Access Granted</h1>" +
    "<p style='margin:0; color:#94a3b8; font-size:13px;'>Welcome to the AI-Native Revenue Transformation Platform</p>" +
    "</div>" +

    // Body
    "<div style='padding:32px;'>" +
    "<p style='color:#e2e8f0; font-size:14px; line-height:1.6; margin:0 0 20px 0;'>Dear <strong style='color:#ffffff;'>" + (userName || "Executive Leader") + "</strong>,</p>" +
    "<p style='color:#cbd5e1; font-size:14px; line-height:1.6; margin:0 0 24px 0;'>Your ProfitMachines account has been successfully registered and provisioned with verified access to our proprietary revenue architecture suite.</p>" +

    // Credentials Box
    "<div style='background:#1e293b; border:1px solid #334155; border-radius:12px; padding:20px; margin:0 0 24px 0;'>" +
    "<div style='color:#64748b; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; margin-bottom:12px;'>Verified Account Credentials</div>" +
    "<table style='width:100%; border-collapse:collapse; font-size:13px;'>" +
    "<tr><td style='color:#94a3b8; padding:6px 0; width:40%;'>User ID:</td><td style='color:#60a5fa; font-family:monospace; font-weight:800; padding:6px 0;'>" + userId + "</td></tr>" +
    "<tr><td style='color:#94a3b8; padding:6px 0;'>Business Email:</td><td style='color:#f8fafc; font-weight:600; padding:6px 0;'>" + userEmail + "</td></tr>" +
    "<tr><td style='color:#94a3b8; padding:6px 0;'>Account Tier:</td><td style='color:#10b981; font-weight:700; padding:6px 0;'>Enterprise Verified</td></tr>" +
    "<tr><td style='color:#94a3b8; padding:6px 0;'>Protected Tools:</td><td style='color:#cbd5e1; padding:6px 0;'>Sales Calculators & Telemetry</td></tr>" +
    "</table>" +
    "</div>" +

    // Action CTA
    "<div style='text-align:center; margin:32px 0;'>" +
    "<a href='" + signInUrl + "' style='display:inline-block; background:linear-gradient(135deg,#2563eb,#4f46e5); color:#ffffff; font-size:14px; font-weight:700; text-decoration:none; padding:14px 32px; border-radius:10px; box-shadow:0 8px 20px rgba(37,99,235,0.35);'>Sign In to Enterprise Portal &rarr;</a>" +
    "</div>" +

    "<p style='color:#94a3b8; font-size:12px; line-height:1.6; margin:0 0 16px 0;'><strong style='color:#e2e8f0;'>Security Notice:</strong> Your password is protected with zero-knowledge cryptographic hashing. It is never stored in plain text or transmitted over email.</p>" +
    "<p style='color:#94a3b8; font-size:12px; line-height:1.6; margin:0;'>Need support? Reach our solutions architecture team at <a href='mailto:poojasri@trustgrid.ai' style='color:#60a5fa; text-decoration:none;'>poojasri@trustgrid.ai</a> or <a href='mailto:connect@trustgrid.ai' style='color:#60a5fa; text-decoration:none;'>connect@trustgrid.ai</a>.</p>" +
    "</div>" +

    // Footer
    "<div style='background:#0b1329; border-top:1px solid #1e293b; padding:20px 32px; text-align:center; color:#64748b; font-size:11px;'>" +
    "&copy; " + new Date().getFullYear() + " ProfitMachines. All Rights Reserved. Enterprise Revenue Science." +
    "</div>" +
    "</div></body></html>";

  sendEmailDirect({
    to: userEmail,
    subject: subject,
    body: plainBody,
    htmlBody: htmlBody,
    name: EMAIL_CONFIG.name,
    replyTo: EMAIL_CONFIG.replyTo
  });
}

/**
 * Sends Admin Notification Email whenever a new user registers.
 */
function sendAdminNewRegistrationNotification(regData) {
  var recipients = [EMAIL_CONFIG.adminEmail].concat(EMAIL_CONFIG.salesEmails);
  // Deduplicate recipients
  var uniqueRecipients = [];
  recipients.forEach(function(email) {
    if (email && email.indexOf("@") !== -1 && uniqueRecipients.indexOf(email) === -1) {
      uniqueRecipients.push(email);
    }
  });

  if (uniqueRecipients.length === 0) return;

  var subject = "👤 New User Registration: " + regData.fullName + " (" + regData.company + ") — User ID: " + regData.userId;
  var spreadsheetUrl = "https://docs.google.com/spreadsheets/d/" + CONFIG.MAIN_SPREADSHEET_ID + "/edit#gid=0";

  var plainBody = "PROFITMACHINES - NEW USER REGISTRATION ALERT\n" +
    "---------------------------------------------------\n" +
    "Registration ID: " + regData.registrationId + "\n" +
    "Full Name: " + regData.fullName + "\n" +
    "Preferred User ID: " + regData.userId + "\n" +
    "Business Email: " + regData.email + "\n" +
    "Mobile Number: " + regData.mobile + "\n" +
    "Company: " + regData.company + "\n" +
    "Website: " + (regData.website || "N/A") + "\n" +
    "Location: " + (regData.city ? regData.city + ", " : "") + (regData.state ? regData.state + ", " : "") + regData.country + "\n" +
    "Industry Sector: " + regData.industry + "\n" +
    "Sub-industry: " + (regData.subIndustry || "N/A") + "\n" +
    "Company Headcount: " + regData.headcount + "\n" +
    "Business Operations: " + regData.operations + "\n" +
    "Registration Date: " + regData.registrationDate + " IST\n" +
    "Spreadsheet: " + spreadsheetUrl;

  var htmlBody = "<!DOCTYPE html><html><head><meta charset='UTF-8'></head>" +
    "<body style='font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,sans-serif; background-color:#090d16; color:#f8fafc; margin:0; padding:30px 10px;'>" +
    "<div style='max-width:650px; margin:0 auto; background:#0f172a; border:1px solid #1e293b; border-radius:16px; overflow:hidden; box-shadow:0 20px 40px rgba(0,0,0,0.5);'>" +
    
    // Header
    "<div style='background:linear-gradient(135deg,#1e1b4b,#0f172a); padding:28px 32px; border-bottom:1px solid #334155;'>" +
    "<span style='background:#6366f1; color:#ffffff; font-size:10px; font-weight:800; letter-spacing:0.15em; padding:4px 10px; border-radius:6px; text-transform:uppercase;'>NEW USER REGISTRATION</span>" +
    "<h1 style='margin:16px 0 4px 0; color:#ffffff; font-size:22px; font-weight:800;'>" + regData.fullName + "</h1>" +
    "<p style='margin:0; color:#94a3b8; font-size:13px;'>" + regData.company + " &bull; User ID: <span style='color:#a5b4fc; font-family:monospace; font-weight:bold;'>" + regData.userId + "</span></p>" +
    "</div>" +

    // Content Grid
    "<div style='padding:32px;'>" +
    "<table style='width:100%; border-collapse:collapse; font-size:13px;'>" +
    "<tr style='border-bottom:1px solid #1e293b;'><td style='color:#64748b; padding:10px 0; width:35%; font-weight:600;'>Registration ID:</td><td style='color:#38bdf8; font-family:monospace; font-weight:700; padding:10px 0;'>" + regData.registrationId + "</td></tr>" +
    "<tr style='border-bottom:1px solid #1e293b;'><td style='color:#64748b; padding:10px 0; font-weight:600;'>Full Name:</td><td style='color:#ffffff; font-weight:700; padding:10px 0;'>" + regData.fullName + "</td></tr>" +
    "<tr style='border-bottom:1px solid #1e293b;'><td style='color:#64748b; padding:10px 0; font-weight:600;'>Business Email:</td><td style='color:#60a5fa; padding:10px 0;'><a href='mailto:" + regData.email + "' style='color:#60a5fa; text-decoration:none;'>" + regData.email + "</a></td></tr>" +
    "<tr style='border-bottom:1px solid #1e293b;'><td style='color:#64748b; padding:10px 0; font-weight:600;'>Mobile Number:</td><td style='color:#ffffff; padding:10px 0;'>" + regData.mobile + "</td></tr>" +
    "<tr style='border-bottom:1px solid #1e293b;'><td style='color:#64748b; padding:10px 0; font-weight:600;'>Preferred User ID:</td><td style='color:#a5b4fc; font-family:monospace; font-weight:700; padding:10px 0;'>" + regData.userId + "</td></tr>" +
    "<tr style='border-bottom:1px solid #1e293b;'><td style='color:#64748b; padding:10px 0; font-weight:600;'>Company Name:</td><td style='color:#ffffff; font-weight:700; padding:10px 0;'>" + regData.company + "</td></tr>" +
    "<tr style='border-bottom:1px solid #1e293b;'><td style='color:#64748b; padding:10px 0; font-weight:600;'>Official Website:</td><td style='color:#cbd5e1; padding:10px 0;'>" + (regData.website || "N/A") + "</td></tr>" +
    "<tr style='border-bottom:1px solid #1e293b;'><td style='color:#64748b; padding:10px 0; font-weight:600;'>Country & Region:</td><td style='color:#ffffff; padding:10px 0;'>" + (regData.city ? regData.city + ", " : "") + (regData.state ? regData.state + ", " : "") + regData.country + "</td></tr>" +
    "<tr style='border-bottom:1px solid #1e293b;'><td style='color:#64748b; padding:10px 0; font-weight:600;'>Industry Sector:</td><td style='color:#ffffff; font-weight:600; padding:10px 0;'>" + regData.industry + (regData.subIndustry ? " (" + regData.subIndustry + ")" : "") + "</td></tr>" +
    "<tr style='border-bottom:1px solid #1e293b;'><td style='color:#64748b; padding:10px 0; font-weight:600;'>Company Headcount:</td><td style='color:#10b981; font-weight:700; padding:10px 0;'>" + regData.headcount + "</td></tr>" +
    "<tr style='border-bottom:1px solid #1e293b;'><td style='color:#64748b; padding:10px 0; font-weight:600;'>Active Operations:</td><td style='color:#cbd5e1; padding:10px 0;'>" + regData.operations + "</td></tr>" +
    "<tr><td style='color:#64748b; padding:10px 0; font-weight:600;'>Registration Time:</td><td style='color:#94a3b8; padding:10px 0;'>" + regData.registrationDate + " IST</td></tr>" +
    "</table>" +

    // Action Button
    "<div style='margin-top:28px; text-align:center;'>" +
    "<a href='" + spreadsheetUrl + "' style='display:inline-block; background:#1e293b; color:#38bdf8; border:1px solid #334155; font-size:13px; font-weight:700; text-decoration:none; padding:12px 24px; border-radius:8px;'>Open 'User_Registration' in Google Sheets &rarr;</a>" +
    "</div>" +
    "</div>" +

    // Footer
    "<div style='background:#0b1329; border-top:1px solid #1e293b; padding:16px 32px; text-align:center; color:#64748b; font-size:11px;'>" +
    "Dispatched exclusively to authorized administrators: poojasri@trustgrid.ai & asmitha.int2027g3@gmail.com" +
    "</div>" +
    "</div></body></html>";

  sendEmailDirect({
    to: uniqueRecipients.join(","),
    subject: subject,
    body: plainBody,
    htmlBody: htmlBody,
    name: EMAIL_CONFIG.name,
    replyTo: regData.email || EMAIL_CONFIG.replyTo
  });
}

/**
 * Sends Admin Notification Email whenever an existing user logs in.
 */
function sendAdminLoginNotification(loginData) {
  var recipients = [EMAIL_CONFIG.adminEmail].concat(EMAIL_CONFIG.salesEmails);
  var uniqueRecipients = [];
  recipients.forEach(function(email) {
    if (email && email.indexOf("@") !== -1 && uniqueRecipients.indexOf(email) === -1) {
      uniqueRecipients.push(email);
    }
  });

  if (uniqueRecipients.length === 0) return;

  var subject = "🔐 User Login: " + loginData.fullName + " (" + loginData.userId + ") — ProfitMachines Enterprise";
  var spreadsheetUrl = "https://docs.google.com/spreadsheets/d/" + CONFIG.MAIN_SPREADSHEET_ID + "/edit#gid=0";

  var plainBody = "PROFITMACHINES - USER LOGIN NOTIFICATION\n" +
    "---------------------------------------------------\n" +
    "User ID: " + loginData.userId + "\n" +
    "Full Name: " + loginData.fullName + "\n" +
    "Business Email: " + loginData.email + "\n" +
    "Login Date: " + loginData.loginDate + "\n" +
    "Login Time: " + loginData.loginTime + " IST\n" +
    "Status: " + loginData.loginStatus + "\n" +
    "IP Address: " + loginData.ipAddress + "\n" +
    "Audit Log: " + spreadsheetUrl;

  var htmlBody = "<!DOCTYPE html><html><head><meta charset='UTF-8'></head>" +
    "<body style='font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,sans-serif; background-color:#090d16; color:#f8fafc; margin:0; padding:25px 10px;'>" +
    "<div style='max-width:550px; margin:0 auto; background:#0f172a; border:1px solid #1e293b; border-radius:14px; overflow:hidden;'>" +
    
    // Header
    "<div style='background:linear-gradient(135deg,#064e3b,#0f172a); padding:20px 24px; border-bottom:1px solid #334155;'>" +
    "<span style='background:#059669; color:#ffffff; font-size:10px; font-weight:800; letter-spacing:0.12em; padding:3px 8px; border-radius:4px; text-transform:uppercase;'>AUTHENTICATION AUDIT</span>" +
    "<h2 style='margin:10px 0 2px 0; color:#ffffff; font-size:18px; font-weight:800;'>User Sign-In Verified</h2>" +
    "<p style='margin:0; color:#6ee7b7; font-size:12px; font-weight:600;'>" + loginData.fullName + " (" + loginData.userId + ")</p>" +
    "</div>" +

    // Details Table
    "<div style='padding:24px;'>" +
    "<table style='width:100%; border-collapse:collapse; font-size:13px;'>" +
    "<tr style='border-bottom:1px solid #1e293b;'><td style='color:#64748b; padding:8px 0; width:40%;'>User ID:</td><td style='color:#38bdf8; font-family:monospace; font-weight:700; padding:8px 0;'>" + loginData.userId + "</td></tr>" +
    "<tr style='border-bottom:1px solid #1e293b;'><td style='color:#64748b; padding:8px 0;'>Full Name:</td><td style='color:#ffffff; font-weight:600; padding:8px 0;'>" + loginData.fullName + "</td></tr>" +
    "<tr style='border-bottom:1px solid #1e293b;'><td style='color:#64748b; padding:8px 0;'>Business Email:</td><td style='color:#60a5fa; padding:8px 0;'>" + loginData.email + "</td></tr>" +
    "<tr style='border-bottom:1px solid #1e293b;'><td style='color:#64748b; padding:8px 0;'>Timestamp:</td><td style='color:#ffffff; padding:8px 0;'>" + loginData.loginDate + " at " + loginData.loginTime + " IST</td></tr>" +
    "<tr style='border-bottom:1px solid #1e293b;'><td style='color:#64748b; padding:8px 0;'>Login Status:</td><td style='color:#10b981; font-weight:700; padding:8px 0;'>" + loginData.loginStatus + "</td></tr>" +
    "<tr><td style='color:#64748b; padding:8px 0;'>Client IP:</td><td style='color:#94a3b8; font-family:monospace; padding:8px 0;'>" + loginData.ipAddress + "</td></tr>" +
    "</table>" +

    "<div style='margin-top:20px; text-align:center;'>" +
    "<a href='" + spreadsheetUrl + "' style='display:inline-block; background:#1e293b; color:#38bdf8; border:1px solid #334155; font-size:12px; font-weight:600; text-decoration:none; padding:10px 20px; border-radius:6px;'>View 'Login_Activity' Log &rarr;</a>" +
    "</div>" +
    "</div>" +

    "</div></body></html>";

  sendEmailDirect({
    to: uniqueRecipients.join(","),
    subject: subject,
    body: plainBody,
    htmlBody: htmlBody,
    name: EMAIL_CONFIG.name,
    replyTo: EMAIL_CONFIG.replyTo
  });
}
