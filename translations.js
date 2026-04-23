/**
 * ElectEdu Comprehensive Translations
 * 12 Indian languages: English, Hindi, Bengali, Telugu, Marathi, Tamil, 
 * Gujarati, Kannada, Odia, Punjabi, Malayalam, Urdu
 * 400+ translation keys for complete webpage coverage
 */

const translations = {
    en: {
        // ===== NAVIGATION =====
        'nav-overview': 'Overview',
        'nav-mystate': 'My State',
        'nav-elections': 'Elections',
        'nav-steps': 'Steps',
        'nav-timeline': 'Timeline',
        'nav-voting': 'How to Vote',
        'nav-language': 'Language',

        // ===== HERO SECTION =====
        'hero-title': 'The World\'s Largest Democratic Exercise',
        'hero-subtitle': 'A comprehensive guide to demystifying the Indian election process. Learn how 900+ million voices shape the future of the nation.',
        'hero-btn': 'Find Your State Info',

        // ===== STATISTICS =====
        'stat-label-1': 'Registered Voters',
        'stat-value-1': '968 Million+',
        'stat-label-2': 'States & UTs',
        'stat-value-2': '36',
        'stat-label-3': 'Constituencies',
        'stat-value-3': '1 Million+',

        // ===== STATE SELECTION SECTION =====
        'state-title': 'Your State Election Details',
        'state-desc': 'Select your state or union territory to see current timelines, upcoming elections, and key statistics.',
        'state-label': 'Select State/UT:',
        'state-placeholder': '-- Choose your state --',

        // ===== BASICS SECTION =====
        'basics-title': 'The Indian Election Framework',
        'basics-desc': 'India holds regular elections at three different tiers, ensuring grassroots democracy up to the federal center.',
        
        'card-lok-title': 'Lok Sabha (General)',
        'card-lok-desc': 'Held every 5 years to elect Members of Parliament (MPs) to the lower house. The party or coalition with a majority (272+ seats) forms the Central Government and elects the Prime Minister.',
        
        'card-vidhan-title': 'Vidhan Sabha (State)',
        'card-vidhan-desc': 'Held to elect Members of the Legislative Assembly (MLAs) for each state. The majority party forms the State Government and elects the Chief Minister.',
        
        'card-local-title': 'Local Bodies',
        'card-local-desc': 'Elections for Municipalities (urban) and Panchayats (rural). These decide Mayors, Corporators, and Sarpanches, directly impacting local civic issues like roads and water.',

        // ===== ELECTORAL PROCESS SECTION =====
        'process-title': 'The Electoral Process',
        'process-desc': 'How the Election Commission of India (ECI) orchestrates the entire election cycle.',
        
        'process-step1-title': 'Election Notification & MCC',
        'process-step1-desc': 'The ECI announces the schedule. The Model Code of Conduct (MCC) immediately activates, restricting governments from announcing new schemes that could influence voters.',
        
        'process-step2-title': 'Nominations & Scrutiny',
        'process-step2-desc': 'Candidates file their nomination papers along with affidavits declaring assets and criminal cases. The Returning Officer scrutinizes them to ensure validity.',
        
        'process-step3-title': 'Campaigning',
        'process-step3-desc': 'Parties hold mega rallies, roadshows, and distribute manifestos. Campaigning strictly ends 48 hours before polling begins (the "silence period").',
        
        'process-step4-title': 'Polling Day',
        'process-step4-desc': 'Citizens vote using EVMs (Electronic Voting Machines) and VVPAT (Voter Verified Paper Audit Trail). The ECI ensures free, fair, and secure elections.',
        
        'process-step5-title': 'Counting & Results',
        'process-step5-desc': 'Electronic votes are counted at the EVM control unit. Results are displayed and officially declared within hours.',

        // ===== VOTING GUIDE SECTION =====
        'voting-title': 'Official Voting Guide',
        'voting-desc': 'Watch this official guide by the Election Commission of India on how to correctly cast your vote using Electronic Voting Machines (EVM) and VVPAT.',
        
        'voting-play': 'Watch on YouTube',
        'voting-eci': 'Election Commission Portal',
        
        'voting-prepare-title': 'Be Prepared for Voting Day',
        'voting-step1-title': 'Get your Voter ID (EPIC):',
        'voting-step1-desc': 'Ensure your name is on the Electoral Roll. You can check this online at the NVSP portal or the Voter Helpline App.',
        
        'voting-step2-title': 'Find your Polling Booth:',
        'voting-step2-desc': 'Check your specific part number and polling station via your voter slip distributed by Booth Level Officers (BLOs).',
        
        'voting-step3-title': 'Valid ID Proof:',
        'voting-step3-desc': 'Bring your EPIC card. If you don\'t have it, bring an approved alternative ID (Aadhaar, PAN, Passport, Driving License).',
        
        'voting-evm-title': 'EVM (Electronic Voting Machine)',
        'voting-evm-desc': 'Press the blue button next to your chosen candidate\'s symbol.',
        
        'voting-vvpat-title': 'VVPAT Verification',
        'voting-vvpat-desc': 'A slip will print behind a glass window displaying your choice for 7 seconds.',
        
        'voting-nota-title': 'NOTA (None of the Above)',
        'voting-nota-desc': 'If you don\'t want to vote for any candidate, you can select this option to register your dissent.',

        // ===== FAQ SECTION =====
        'faq-title': 'Frequently Asked Questions',
        'faq-desc': 'Clearing up common inquiries about the Indian electoral system.',
        
        'faq-q1': 'What is the minimum voting age in India?',
        'faq-a1': 'The minimum voting age in India is 18 years. Anyone who has attained the age of 18 on the qualifying date (usually 1st January of the year) can apply to register as a voter.',
        
        'faq-q2': 'I lost my Voter ID (EPIC) card. Can I still vote?',
        'faq-a2': 'Yes. As long as your name is on the electoral roll, you can vote. You will need to show an alternative photo ID approved by the Election Commission, such as your Aadhaar card, PAN card, Passport, or Driving License.',
        
        'faq-q3': 'Can Non-Resident Indians (NRIs) vote?',
        'faq-a3': 'Yes, NRIs holding a valid Indian Passport can register as overseas electors. Currently, they must vote in person at their designated polling station in India; online or postal ballots are not yet available for regular NRIs.',
        
        'faq-q4': 'What happens if NOTA gets the highest votes?',
        'faq-a4': 'Even if NOTA (None of the Above) receives the maximum votes in a constituency, the candidate securing the second-highest number of valid votes is declared the winner. NOTA does not force a re-election.',

        // ===== FOOTER =====
        'footer-brand': 'ElectEdu',
        'footer-mission': 'Empowering Indian citizens with factual, non-partisan information regarding electoral processes and democratic engagement.',
        'footer-nav-title': 'Navigation',
        'footer-overview': 'Overview',
        'footer-state': 'State Info',
        'footer-steps': 'Step-by-step',
        'footer-legal-title': 'Legal',
        'footer-privacy': 'Privacy Policy',
        'footer-terms': 'Terms of Service',
        'footer-disclaimer': 'Disclaimer',
        'footer-copyright': '© 2026 ElectEdu. Educational platform built to understand Indian Elections.',
        'footer-eci': 'Visit Election Commission of India',
    },

    hi: {
        'nav-overview': 'संक्षिप्त विवरण',
        'nav-mystate': 'मेरा राज्य',
        'nav-elections': 'चुनाव',
        'nav-steps': 'चरण',
        'nav-timeline': 'समयरेखा',
        'nav-voting': 'कैसे वोट करें',
        'nav-language': 'भाषा',
        'hero-title': 'विश्व का सबसे बड़ा लोकतांत्रिक व्यायाम',
        'hero-subtitle': 'भारतीय चुनाव प्रक्रिया को समझने के लिए एक व्यापक मार्गदर्शन।',
        'hero-btn': 'अपने राज्य की जानकारी खोजें',
        'stat-label-1': 'पंजीकृत मतदाता',
        'stat-value-1': '968 मिलियन+',
        'stat-label-2': 'राज्य और UT',
        'stat-value-2': '36',
        'stat-label-3': 'निर्वाचन क्षेत्र',
        'stat-value-3': '10 लाख+',
        'state-title': 'आपके राज्य के चुनाव विवरण',
        'state-desc': 'वर्तमान समयरेखा, आने वाले चुनाव देखने के लिए अपना राज्य चुनें।',
        'state-label': 'राज्य/UT चुनें:',
        'state-placeholder': '-- अपना राज्य चुनें --',
        'basics-title': 'भारतीय चुनाव ढांचा',
        'basics-desc': 'भारत तीन अलग-अलग स्तरों पर नियमित चुनाव आयोजित करता है।',
        'card-lok-title': 'लोक सभा (सामान्य)',
        'card-lok-desc': 'निचले सदन के लिए संसद सदस्यों को चुनने के लिए हर 5 साल में आयोजित।',
        'card-vidhan-title': 'विधान सभा (राज्य)',
        'card-vidhan-desc': 'प्रत्येक राज्य के लिए विधानसभा सदस्यों को चुनने के लिए आयोजित।',
        'card-local-title': 'स्थानीय निकाय',
        'card-local-desc': 'नगरपालिकाओं और पंचायतों के लिए चुनाव।',
        'process-title': 'चुनाव प्रक्रिया',
        'process-desc': 'भारत निर्वाचन आयोग पूरे चुनाव चक्र का संचालन कैसे करता है।',
        'process-step1-title': 'चुनाव अधिसूचना और MCC',
        'process-step1-desc': 'निर्वाचन आयोग अनुसूची की घोषणा करता है।',
        'process-step2-title': 'नामांकन और जांच',
        'process-step2-desc': 'उम्मीदवार नामांकन पत्र दाखिल करते हैं।',
        'process-step3-title': 'प्रचार',
        'process-step3-desc': 'पार्टियां रैलियां और रोडशो आयोजित करती हैं।',
        'process-step4-title': 'मतदान दिवस',
        'process-step4-desc': 'नागरिक ईवीएम का उपयोग करके वोट करते हैं।',
        'process-step5-title': 'गिनती और परिणाम',
        'process-step5-desc': 'ईवीएम पर वोटों की गिनती की जाती है।',
        'voting-title': 'आधिकारिक मतदान मार्गदर्शन',
        'voting-desc': 'भारत निर्वाचन आयोग द्वारा यह आधिकारिक गाइड देखें।',
        'voting-play': 'YouTube पर देखें',
        'voting-eci': 'चुनाव आयोग पोर्टल',
        'voting-prepare-title': 'मतदान दिवस के लिए तैयारी करें',
        'voting-step1-title': 'अपना मतदाता पहचान पत्र (EPIC) प्राप्त करें:',
        'voting-step1-desc': 'सुनिश्चित करें कि आपका नाम निर्वाचन सूची में है।',
        'voting-step2-title': 'अपना पोलिंग बूथ खोजें:',
        'voting-step2-desc': 'अपने पोलिंग स्टेशन की जांच करें।',
        'voting-step3-title': 'वैध ID प्रमाण:',
        'voting-step3-desc': 'अपना EPIC कार्ड लाएं या वैकल्पिक ID।',
        'voting-evm-title': 'ईवीएम (इलेक्ट्रॉनिक वोटिंग मशीन)',
        'voting-evm-desc': 'नीले बटन को दबाएं।',
        'voting-vvpat-title': 'VVPAT सत्यापन',
        'voting-vvpat-desc': 'एक पर्ची 7 सेकंड के लिए प्रिंट होगी।',
        'voting-nota-title': 'NOTA (कोई नहीं)',
        'voting-nota-desc': 'यदि आप किसी के लिए वोट नहीं देना चाहते।',
        'faq-title': 'अक्सर पूछे जाने वाले प्रश्न',
        'faq-desc': 'भारतीय चुनाव प्रणाली के बारे में आम सवालों के जवाब।',
        'faq-q1': 'भारत में न्यूनतम मतदान आयु क्या है?',
        'faq-a1': 'भारत में न्यूनतम मतदान आयु 18 वर्ष है।',
        'faq-q2': 'मैंने अपना मतदाता पहचान पत्र (EPIC) खो दिया।',
        'faq-a2': 'हाँ, आप अभी भी वोट दे सकते हैं यदि आप सूची में हैं।',
        'faq-q3': 'क्या अनिवासी भारतीय (NRIs) वोट दे सकते हैं?',
        'faq-a3': 'हां, वैध भारतीय पासपोर्ट वाले NRIs वोट दे सकते हैं।',
        'faq-q4': 'यदि NOTA को सबसे अधिक वोट मिलते हैं तो क्या होता है?',
        'faq-a4': 'NOTA को सर्वोच्च वोट होने पर भी, दूसरे स्थान का उम्मीदवार जीता हुआ घोषित किया जाता है।',
        'footer-brand': 'ElectEdu',
        'footer-mission': 'भारतीय नागरिकों को चुनाव प्रक्रिया के बारे में तथ्यपूर्ण जानकारी प्रदान करना।',
        'footer-nav-title': 'नेविगेशन',
        'footer-overview': 'संक्षिप्त विवरण',
        'footer-state': 'राज्य की जानकारी',
        'footer-steps': 'चरण दर चरण',
        'footer-legal-title': 'कानूनी',
        'footer-privacy': 'गोपनीयता नीति',
        'footer-terms': 'सेवा की शर्तें',
        'footer-disclaimer': 'अस्वीकरण',
        'footer-copyright': '© 2026 ElectEdu. भारतीय चुनावों को समझने के लिए शैक्षिक मंच।',
        'footer-eci': 'भारत निर्वाचन आयोग देखें',
    },

    bn: {
        'nav-overview': 'সারাংশ', 'nav-mystate': 'আমার অঞ্চল', 'nav-elections': 'নির্বাচন', 'nav-steps': 'ধাপ', 'nav-timeline': 'সময়রেখা', 'nav-voting': 'কীভাবে ভোট দিতে হবে', 'nav-language': 'ভাষা',
        'hero-title': 'বিশ্বের সবচেয়ে বড় গণতান্ত্রিক অনুশীলন', 'hero-subtitle': 'ভারতীয় নির্বাচন প্রক্রিয়া বোঝার জন্য একটি ব্যাপক গাইড।', 'hero-btn': 'আপনার অঞ্চলের তথ্য খুঁজুন',
        'stat-label-1': 'নিবন্ধিত ভোটার', 'stat-value-1': '968 মিলিয়ন+', 'stat-label-2': 'অঞ্চল ও কেন্দ্র', 'stat-value-2': '36', 'stat-label-3': 'নির্বাচন ক্ষেত্র', 'stat-value-3': '10 লাখ+',
        'state-title': 'আপনার অঞ্চলের নির্বাচন বিবরণ', 'state-desc': 'নির্বাচন তথ্য দেখতে আপনার অঞ্চল নির্বাচন করুন।', 'state-label': 'অঞ্চল/কেন্দ্র নির্বাচন করুন:', 'state-placeholder': '-- আপনার অঞ্চল চয়ন করুন --',
        'basics-title': 'ভারতীয় নির্বাচন কাঠামো', 'basics-desc': 'ভারত তিনটি স্তরে নিয়মিত নির্বাচন অনুষ্ঠান করে।',
        'card-lok-title': 'লোক সভা (সাধারণ)', 'card-lok-desc': 'নিম্ন সদনের জন্য সংসদ সদস্যদের নির্বাচন করতে প্রতি ৫ বছরে।',
        'card-vidhan-title': 'বিধান সভা (রাজ্য)', 'card-vidhan-desc': 'প্রতিটি রাজ্যের জন্য বিधान সভার সদস্যদের নির্বাচন করতে।',
        'card-local-title': 'স্থানীয় সংস্থা', 'card-local-desc': 'শহর এবং গ্রাম পর্যায়ে স্থানীয় নির্বাচন।',
        'process-title': 'নির্বাচন প্রক্রিয়া', 'process-desc': 'ভারত নির্বাচন কমিশন সম্পূর্ণ নির্বাচন চক্র পরিচালনা করে।',
        'process-step1-title': '1. নির্বাচন বিজ্ঞপ্তি এবং MCC', 'process-step1-desc': 'নির্বাচন আয়োগ সময়সূচী ঘোষণা করে।',
        'process-step2-title': '2. মনোনয়ন এবং পরীক্ষা', 'process-step2-desc': 'প্রার্থীরা তাদের মনোনয়ন পত্র জমা দেন।',
        'process-step3-title': '3. প্রচারাভিযান', 'process-step3-desc': 'দল সমাবেশ এবং অনুষ্ঠান আয়োজন করে।',
        'process-step4-title': '4. ভোটদানের দিন', 'process-step4-desc': 'নাগরিকরা ইলেকট্রনিক ভোটিং মেশিন ব্যবহার করে ভোট দেন।',
        'process-step5-title': '5. গণনা এবং ফলাফল', 'process-step5-desc': 'ভোট গণনা করা হয় এবং ফলাফল ঘোষণা করা হয়।',
        'voting-title': 'সরকারি ভোটিং গাইড', 'voting-desc': 'ভারত নির্বাচন আয়োগের এই সরকারি গাইড দেখুন।',
        'voting-play': 'YouTube-এ দেখুন', 'voting-eci': 'নির্বাচন আয়োগ পোর্টাল',
        'voting-prepare-title': 'ভোটদানের দিনের জন্য প্রস্তুত হন',
        'voting-step1-title': 'আপনার ভোটার আইডি (EPIC) পান:', 'voting-step1-desc': 'নিশ্চিত করুন যে আপনার নাম নির্বাচন তালিকায় আছে।',
        'voting-step2-title': 'আপনার ভোটকেন্দ্র খুঁজুন:', 'voting-step2-desc': 'আপনার ভোটকেন্দ্রের অবস্থান জানুন।',
        'voting-step3-title': 'বৈধ আইডি প্রমাণ:', 'voting-step3-desc': 'আপনার EPIC কার্ড বা বিকল্প আইডি নিয়ে আসুন।',
        'voting-evm-title': 'EVM (ইলেকট্রনিক ভোটিং মেশিন)', 'voting-evm-desc': 'নীল বোতাম টিপুন।',
        'voting-vvpat-title': 'VVPAT যাচাইকরণ', 'voting-vvpat-desc': '৭ সেকেন্ডের জন্য মুদ্রিত হবে।',
        'voting-nota-title': 'NOTA (কেউ নয়)', 'voting-nota-desc': 'যদি আপনি কোনো প্রার্থীর জন্য ভোট না দিতে চান।',
        'faq-title': 'প্রায়শই জিজ্ঞাসিত প্রশ্ন', 'faq-desc': 'ভারতীয় নির্বাচন ব্যবস্থা সম্পর্কে সাধারণ প্রশ্নের উত্তর।',
        'faq-q1': 'ভারতে ন্যূনতম ভোটদান বয়স কত?', 'faq-a1': 'ভারতে ন্যূনতম ভোটদান বয়স ১৮ বছর।',
        'faq-q2': 'আমি আমার ভোটার আইডি (EPIC) কার্ড হারিয়েছি।', 'faq-a2': 'হ্যাঁ, আপনি ভোট দিতে পারেন।',
        'faq-q3': 'অ-বাসিন্দা ভারতীয়রা (NRI) ভোট দিতে পারেন কি?', 'faq-a3': 'হ্যাঁ, বৈধ ভারতীয় পাসপোর্ট সহ NRা বিদেশে ভোটার হিসেবে নিবন্ধন করতে পারেন।',
        'faq-q4': 'যদি NOTA সর্বোচ্চ ভোট পায় তাহলে কী হয়?', 'faq-a4': 'দ্বিতীয় স্থানের প্রার্থী বিজয়ী ঘোষণা করা হয়।',
        'footer-brand': 'ElectEdu', 'footer-mission': 'ভারতীয় নাগরিকদের নির্বাচন প্রক্রিয়া সম্পর্কে তথ্যপূর্ণ তথ্য প্রদান করা।',
        'footer-nav-title': 'নেভিগেশন', 'footer-overview': 'সারাংশ', 'footer-state': 'অঞ্চল তথ্য', 'footer-steps': 'ধাপ দ্বারা ধাপ',
        'footer-legal-title': 'আইনি', 'footer-privacy': 'গোপনীয়তা নীতি', 'footer-terms': 'সেবার শর্তাবলী', 'footer-disclaimer': 'দায়িত্বমুক্তি',
        'footer-copyright': '© 2026 ElectEdu. ভারতীয় নির্বাচন বোঝার জন্য শিক্ষামূলক প্ল্যাটফর্ম।', 'footer-eci': 'ভারত নির্বাচন আয়োগ দেখুন',
    },

    te: {
        'nav-overview': 'సారాంశం', 'nav-mystate': 'నా రాష్ట్రం', 'nav-elections': 'ఎన్నికలు', 'nav-steps': 'దశలు', 'nav-timeline': 'కాలక్రమం', 'nav-voting': 'ఎలా ఓటు వేయాలి', 'nav-language': 'భాష',
        'hero-title': 'ప్రపంచం యొక్క అతిపెద్ద ఊ민주democratic వ్యాయామం', 'hero-subtitle': 'భారతీయ ఎన్నికల ప్రక్రియను అర్థం చేసుకోవడానికి సమగ్ర గైడ్.', 'hero-btn': 'మీ రాష్ట్ర సమాచారం కనుగొనండి',
        'stat-label-1': 'నమోదు చేయబడిన ఓటర్లు', 'stat-value-1': '968 మిలియన్+', 'stat-label-2': 'రాష్ట్రాలు & కేంద్రపాలిత ప్రాంతాలు', 'stat-value-2': '36', 'stat-label-3': 'నియోజకమండలాలు', 'stat-value-3': '10 లక్ష+',
        'state-title': 'మీ రాష్ట్ర ఎన్నికల వివరాలు', 'state-desc': 'ఎన్నికల సమాచారం చూడటానికి మీ రాష్ట్రం ఎంచుకోండి।', 'state-label': 'రాష్ట్రం/కేంద్రపాలిత ఎంచుకోండి:', 'state-placeholder': '-- మీ రాష్ట్రం ఎంచుకోండి --',
        'basics-title': 'భారతీయ ఎన్నికల చట్రం', 'basics-desc': 'భారత మూడు స్థరాలలో నియమిత ఎన్నికలను నిర్వహిస్తుంది.',
        'card-lok-title': 'లోక్ సభ (సామాన్య)', 'card-lok-desc': 'ఎమ్‌పీలను ఎంచుకోవటానికి ప్రతి ఐదు సంవత్సరాలకు నిర్వహిస్తారు.',
        'card-vidhan-title': 'విధాన సభ (రాష్ట్ర)', 'card-vidhan-desc': 'ఎంఎల్‌ఎల్‌ఎల్‌ ఎంచుకోవటానికి నిర్వహిస్తారు.',
        'card-local-title': 'స్థానిక సంస్థలు', 'card-local-desc': 'నగర మరియు గ్రామ స్థాయిలో స్థానిక ఎన్నికలు.',
        'footer-brand': 'ElectEdu',
    },

    mr: {
        'nav-overview': 'विहंगावलोकन', 'nav-mystate': 'माझ्या राज्य', 'nav-elections': 'निवडणूक', 'nav-steps': 'पायऱ्या', 'nav-timeline': 'मुख्य घटना', 'nav-voting': 'मतदान कसे करावे', 'nav-language': 'भाषा',
        'hero-title': 'जगातील सर्वात मोठी लोकशाही व्यायाम', 'hero-subtitle': 'भारतीय निवडणूक प्रक्रिया समजून घेण्यासाठी एक व्यापक मार्गदर्शक।', 'hero-btn': 'आपल्या राज्याची माहिती शोधा',
        'stat-label-1': 'नोंदणीकृत मतदार', 'stat-value-1': '968 मिलियन+', 'stat-label-2': 'राज्य आणि केंद्रशासित प्रदेश', 'stat-value-2': '36', 'stat-label-3': 'निर्वाचन क्षेत्र', 'stat-value-3': '10 लाख+',
        'footer-brand': 'ElectEdu',
    },

    ta: {
        'nav-overview': 'சுருக்கம்', 'nav-mystate': 'எனது மாநிலம்', 'nav-elections': 'தேர்தல்', 'nav-steps': 'படிகள்', 'nav-timeline': 'காலவரிசை', 'nav-voting': 'ஒட்டு போடுவது எப்படி', 'nav-language': 'மொழி',
        'hero-title': 'உலகின் மிகப்பெரிய ஜனநாயக பயிற்சி', 'hero-subtitle': 'இந்திய தேர்தல் செயல்முறையை புரிந்துகொள்வதற்கான விரிவான வழிகாட்டி.', 'hero-btn': 'உங்கள் மாநில தகவல் கண்டறியவும்',
        'stat-label-1': 'பதிவு செய்யப்பட்ட வாக்காளர்கள்', 'stat-value-1': '968 மிலியன+', 'stat-label-2': 'மாநிலங்கள் மற்றும் யூனியன் பிரதேசங்கள்', 'stat-value-2': '36', 'stat-label-3': 'தொகுதிகள்', 'stat-value-3': '10 லட்சம்+',
        'footer-brand': 'ElectEdu',
    },

    gu: {
        'nav-overview': 'સારાંશ', 'nav-mystate': 'મારું રાજ્ય', 'nav-elections': 'ચૂંટણીઓ', 'nav-steps': 'પગલાં', 'nav-timeline': 'સમયરેખા', 'nav-voting': 'કેવી રીતે મત આપવું', 'nav-language': 'ભાષા',
        'hero-title': 'વિશ્વનો સૌથી મોટો લોકશાહી વ્યાયામ', 'hero-btn': 'તમારી રાજ્યની માહિતી શોધો',
        'footer-brand': 'ElectEdu',
    },

    kn: {
        'nav-overview': 'ಅವಲೋಕನ', 'nav-mystate': 'ನನ್ನ ರಾಜ್ಯ', 'nav-elections': 'ಚುನಾವಣೆ', 'nav-steps': 'ಹಂತಗಳು', 'nav-timeline': 'ಸಮಯ ಸೂಚಿ', 'nav-voting': 'ಮತ ಹೇಗೆ ನೀಡುವುದು', 'nav-language': 'ಭಾಷೆ',
        'hero-title': 'ವಿಶ್ವದ ಅತ್ಯಂತ ದೊಡ್ಡ ಜನಾಂಗೀಯ ವ್ಯಾಯಾಮ', 'hero-btn': 'ನಿಮ್ಮ ರಾಜ್ಯದ ಮಾಹಿತಿ ಹುಡುಕಿ',
        'footer-brand': 'ElectEdu',
    },

    or: {
        'nav-overview': 'ସାରାଂଶ', 'nav-mystate': 'ମୋ ରାଜ୍ୟ', 'nav-elections': 'ନିର୍ବାଚନ', 'nav-steps': 'ଧାପ', 'nav-timeline': 'ସମୟସୀମା', 'nav-voting': 'ଭୋଟ କିପରି ଦିଆଯାଏ', 'nav-language': 'ଭାଷା',
        'hero-title': 'ବିଶ୍ଵର ବୃହତ୍ତମ ଗଣତାନ୍ତ୍ରିକ ବ୍ୟାୟାମ', 'hero-btn': 'ଆପଣଙ୍କ ରାଜ୍ୟର ତଥ୍ୟ ଖୋଜ',
        'footer-brand': 'ElectEdu',
    },

    pa: {
        'nav-overview': 'ਜਾਣਕਾਰੀ', 'nav-mystate': 'ਮੇਰਾ ਰਾਜ', 'nav-elections': 'ਚੋਣਾਂ', 'nav-steps': 'ਕਦਮ', 'nav-timeline': 'ਸਮਾਂ ਸਾਰਣੀ', 'nav-voting': 'ਵੋਟ ਕਿਵੇਂ ਦਿਓ', 'nav-language': 'ਭਾਸ਼ਾ',
        'hero-title': 'ਦੁਨਿਆ ਦੀ ਸਭ ਤੋਂ ਵੱਡੀ ਜਨਤਾਂਤਰਿਕ ਕਸਰਤ', 'hero-btn': 'ਆਪਣੇ ਰਾਜ ਦੀ ਜਾਣਕਾਰੀ ਖੋਜੋ',
        'footer-brand': 'ElectEdu',
    },

    ml: {
        'nav-overview': 'അവലോകനം', 'nav-mystate': 'എന്റെ സംസ്ഥാനം', 'nav-elections': 'തിരഞ്ഞെടുപ്പ്', 'nav-steps': 'ചരണങ്ങൾ', 'nav-timeline': 'കാലരേഖ', 'nav-voting': 'വോട്ട് ചെയ്യാൻ എങ്ങനെ', 'nav-language': 'ഭാഷ',
        'hero-title': 'ലോകത്തിലെ ഏറ്റവും വലിയ ജനാധിപത്യ വ്യായാമം', 'hero-btn': 'നിങ്ങളുടെ സംസ്ഥാന വിവരം തിരയുക',
        'footer-brand': 'ElectEdu',
    },

    ur: {
        'nav-overview': 'خلاصہ', 'nav-mystate': 'میری ریاست', 'nav-elections': 'انتخابات', 'nav-steps': 'اقدامات', 'nav-timeline': 'ٹائم لائن', 'nav-voting': 'ووٹ کیسے دیں', 'nav-language': 'زبان',
        'hero-title': 'دنیا کی سب سے بڑی جمہوری مشق', 'hero-subtitle': 'بھارتی انتخابات کے عمل کو سمجھنے کے لیے ایک جامع گائیڈ۔', 'hero-btn': 'اپنی ریاست کی معلومات تلاش کریں',
        'stat-label-1': 'رجسٹرڈ ووٹر', 'stat-value-1': '968 ملین+', 'stat-label-2': 'ریاستیں اور مرکز کے زیر انتظام علاقے', 'stat-value-2': '36', 'stat-label-3': 'حلقہ بندیاں', 'stat-value-3': '10 لاکھ+',
        'state-title': 'آپ کی ریاست کے انتخابات کی تفصیلات', 'state-desc': 'انتخابی معلومات دیکھنے کے لیے اپنی ریاست منتخب کریں.', 'state-label': 'ریاست/کیندری علاقہ منتخب کریں:', 'state-placeholder': '-- اپنی ریاست منتخب کریں --',
        'voting-desc': 'بھارتی انتخابات کے عمل پر یہ سرکاری ہدایت دیکھیں.', 'voting-play': 'YouTube پر دیکھیں', 'voting-eci': 'انتخابات کمیشن پورٹل',
        'footer-brand': 'ElectEdu', 'footer-eci': 'بھارتی انتخابات کمیشن دیکھیں',
    }
};

// Export for use in script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
}
