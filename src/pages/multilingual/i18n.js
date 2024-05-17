import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    lng: "en",
    resources: {
        en: {
            translation: {
                adminLogin: "Admin Login",
                userLogin: "Login",
                userRegister: "New User? Register Here",

                //admin feedback
                feedbackheading: "FEEDBACK FROM USER",
                feedbackpara: "On this page you can get the suggestion / feedback from the user!",

                //adminlogin page
                adminID: "Admin ID",
                password: "Password",
                login: "Login",
                incorrect: "Admin Id or Password is Incorrect!",

                //adminDashboard
                generalComplaint: "GENERAL COMPLAINTS",
                urgentComplaint: "URGENT COMPLAINTS",
                feedback: "FEEDBACKS",

                resolvedComplaint: "Resolved Complaints",
                unresolvedComplaint: "Unresolved Complaints",

                username: "Username",
                complaintType: "Complaint Type",
                city: "City",
                description: "Description",
                setComplaintStatus: "Set Complaint Status",
                postedOn: "Posted on",
                address: "Address",
                currentStatus: "Current Status",
                onGoing: "On-Going",
                issueRectified: "Issue Rectified",
                setTheStatus: "Set the Status",
                moreDetails: "View More",
                hideDetails: "View Less",

                suggestion: "SUGGESTION",

                adminpara: "Click the below link to see the complaints regarding resolved complaints or unresolved complaints!",


                //userpages

                //login
                signinwithGoogle: "Sign In with Google",
                signintoyourAccount: "Sign In to your account",
                emailAddress: "Email address",
                userIncorrect: "Email or Password is Incorrect!",

                //userdashboard
                addComplaint: "ADD COMPLAINT",
                myComplaint: "MY COMPLAINT",

                userdashboardheading: "COMPLAINTS YOU POSTED",
                userdashboardpara: "On this page you can see complaint details you posted!",

                //addcomplaint
                type: "TYPE",
                typeDescription: "TYPE DESCRIPTION",
                City: "CITY",
                Address: "ADDRESS",
                UploadPhoto: "UPLOAD PHOTO",
                typeContent: "Select the type of complaint you want to post",
                cityContent: "May not be accurate upto your current location, please fill up yourself if wrong.",

                addcomplaintheading: "GIVE YOUR COMPLAINT",
                addcomplaintpara: "On this page you can enter your complaint details here!",

                submit: "Submit",

                //mycomplaint
                status: "Status",

                //suggestionForm
                suggestionForm: "SUGGESTION FORM",
                Suggestion: "SUGGESTION",

                //signupoptions page
                createNewAccount: "Sign Up to your account",
                signupwithGoogle: "Sign Up with Google",
                rewritePassword: "Rewrite-Password",

                //asking user page
                useraccount: "User Account",
                createAccount: "Create a New Account",

                //home navbar page
                admin: "ADMIN",
                user: "USER",
                ourservice: "OUR SERVICE",
                aboutus: "ABOUT US",

                //home herosection page
                heroHeading: "Cleanliness for a Better Future",
                heropara1: "Join us in our mission to maintain cleanliness in Tamil Nadu.",
                heropara2: "Submit your complaints and help us create a cleaner environment for all.",
                herobutton: "Learn More",

                //home ourservice
                serviceheading: "Simplifying Complaint Management",
                servicepara: "Create an account, post your complaint with a specific department type and you can easily track its status. Our user-friendly platform streamlines the process, ensuring your concerns are addressed promptly.",
                serviceP1heading: "Effortless Complaint Submission",
                serviceP1para: "With just a few clicks, submit your complaint regarding electricity, water, drainage, property damage, and more. Our intuitive interface makes it simple and convenient.",
                serviceP2heading: "Transparent Status Tracking",
                serviceP2para: "Stay informed about the progress of your complaint. Our system provides real-time updates, ensuring transparency and accountability.",
                serviceP3heading: "Automatic Location Detection",
                serviceP3para: "Our system incorporates automatic location detection and geo tagged photos which are helpful in resolving the issue, if that location is not complaint location then user can change the location",
                serviceP4heading: "Suggestion / Feedback About Complaint Solving",
                serviceP4para: "In our system, user can give the feedback (or) suggestions to the specific admin that helps admin to identify their problem and solve the complaint quickly",

                //home aboutus
                aboutusheading: "Addressing Key City Problems",
                aboutuspara: "Empowering Tamil Nadu is a website that allows users to create an account and post complaints regarding electricity, water, drainage, property damage, public toilet maintenance, garbage, and              more. Administrators works to resolve these              issues and keep the city clean and functional.",
                aboutusP1heading: "Electricity",
                aboutusP1para: "Report electricity-related problems and get them resolved efficiently.",
                aboutusP2heading: "Water",
                aboutusP2para: "Submit water-related complaints and ensure a clean water supply for all.",
                aboutusP3heading: "Public Property Damage",
                aboutusP3para: "Report public or government-owned assets related problems and get them resolved efficiently.",
                aboutusP4heading: "Drainage",
                aboutusP4para: "Report drainage issues in your area and resolve them effectively.",
                aboutusP5heading: "Public Toilet Maintenance",
                aboutusP5para: "Report the issues of public toilet in your area so that we can clean it effectively.",
                aboutusP6heading: "Garbage",
                aboutusP6para: "Report garbage issues in your area through our website.",
                aboutusP7heading: "Others",
                aboutusP7para: "If the above complaint type is not related to your complaint type then you can choose others and fill the complaint type.",

                //home faqsection
                faqheading: "FAQ",
                faqpara: "Find answers to common questions about the complaint submission  process, response times, and follow-ups.",
                faqP1question: "How to submit a complaint?",
                faqP1answer: "To submit a complaint, simply create an account and fill out the complaint form with details about the issue you are facing.",
                faqP2question: "What is the response time?",
                faqP2answer: "The response time may vary depending on the nature and severity of the complaint. Our team strives to address and resolve complaints as quickly as possible.",
                faqP3question: "How can I follow up?",
                faqP3answer: "You can follow up on your complaint by logging into your account and checking the status of your complaint. Our team will also provide updates via email or phone if necessary.",
                faqP4question: "What types of complaints are accepted?",
                faqP4answer: "We accept complaints related to electricity, water, drainage, property damage, and other similar issues that affect the cleanliness and well-being of Tamil Nadu.",
                faqP5question: "How are complaints resolved?",
                faqP5answer: "Our admin team reviews each complaint and takes necessary actions to resolve the issue. Once resolved, the status of the complaint will be updated accordingly.",

                //home contact section
                contactheading: "Still have questions?",
                contactpara: "Contact us for further assistance.",
                contactbutton: "Contact",

                //user suggestion
                suggestionheading: "SHARE YOUR SUGGESTIONS",
                suggestionpara: "On this page you can give your suggestion or feedback to the specific admin that helps admin to identify your problem and increase the complaint solving time!"

            },
        },
        ta: {
            translation: {
                adminLogin: "நிர்வாக உள்நுழைவு",
                userLogin: "பயனர் உள்நுழைவு",
                userRegister:"புதிய பயனர்? இங்கே பதிவு செய்யுங்கள்",

                //admin feedback
                feedbackheading: "பயனரிடமிருந்து கருத்து",
                feedbackpara: "இந்தப் பக்கத்தில் நீங்கள் பயனரின் பரிந்துரை / கருத்தைப் பெறலாம்!",

                //adminlogin page
                adminID: "நிர்வாகி ஐடி",
                password: "கடவுச்சொல்",
                login: "உள்நுழைய",
                incorrect: "நிர்வாகி ஐடி அல்லது கடவுச்சொல் தவறானது!",

                //adminDashboard
                generalComplaint: "பொதுவான புகார்கள்",
                urgentComplaint: "அவசர புகார்கள்",
                feedback: "பின்னூட்டங்கள்",

                resolvedComplaint: "தீர்க்கப்பட்ட புகார்கள்",
                unresolvedComplaint: "தீர்க்கப்படாத புகார்கள்",

                username: "பயனர் பெயர்",
                complaintType: "புகார் வகை",
                city: "நகரம்",
                description: "விளக்கம்",
                setComplaintStatus: "புகார் நிலையை அமைக்கவும்",
                postedOn: "அன்று வெளியிடப்பட்டது",
                address: "முகவரி",
                currentStatus: "தற்போதைய நிலை",
                onGoing: "நடந்து கொண்டிருக்கிறது",
                issueRectified: "பிரச்சினை சரி செய்யப்பட்டது",
                setTheStatus: "நிலையை அமைக்கவும்",
                moreDetails: "மேலும் பார்க்க",
                hideDetails: "குறைவாக பார்க்க",

                suggestion: "பரிந்துரை",

                adminpara: "தீர்க்கப்பட்ட புகார்கள் அல்லது தீர்க்கப்படாத புகார்கள் தொடர்பான புகார்களைப் பார்க்க கீழே உள்ள இணைப்பைக் கிளிக் செய்யவும்!",

                //userpage

                //loginpage
                signinwithGoogle: "Google மூலம் உள்நுழையவும்",
                signintoyourAccount: "உங்கள் கணக்கில் உள்நுழையவும்",
                emailAddress: "மின்னஞ்சல் முகவரி",
                userIncorrect: "மின்னஞ்சல் அல்லது கடவுச்சொல் தவறானது!",

                //userdashboard
                addComplaint: "புகார் சேர்க்க",
                myComplaint: "என் புகார்",

                userdashboardheading: "நீங்கள் இடுகையிட்ட புகார்கள்",
                userdashboardpara: "நீங்கள் இடுகையிட்ட புகார் விவரங்களை இந்தப் பக்கத்தில் பார்க்கலாம்!",

                //addcomplaint
                type: "புகார் வகை",
                typeDescription: "வகை விளக்கம்",
                City: "நகரம்",
                Address: "முகவரி",
                UploadPhoto: "புகைப்படத்தை பதிவேற்றவும்",
                typeContent: "நீங்கள் இடுகையிட விரும்பும் புகார் வகையைத் தேர்ந்தெடுக்கவும்",
                cityContent: "உங்கள் தற்போதைய இருப்பிடம் வரை துல்லியமாக இல்லாமல் இருக்கலாம், தவறாக இருந்தால் நீங்களே நிரப்பவும்.",
                submit: "சமர்ப்பிக்க",

                addcomplaintheading: "உங்கள் புகாரைக் கொடுங்கள்",
                addcomplaintpara: "இந்தப் பக்கத்தில் உங்கள் புகார் விவரங்களை இங்கே உள்ளிடலாம்!",

                //mycomplaint
                status: "நிலை",

                //suggestionForm
                suggestionForm: "பரிந்துரை படிவம்",
                Suggestion: "பரிந்துரை",

                //signupoptions page
                createNewAccount: "உங்கள் கணக்கில் பதிவு செய்யவும்",
                signupwithGoogle: "Google உடன் பதிவு செய்யவும்",
                rewritePassword: "கடவுச்சொல்லை மீண்டும் எழுதவும்",

                //asking user page
                useraccount: "பயனர் கணக்கு",
                createAccount: "புதிய கணக்கை துவங்கு",

                //home navbar page
                admin: "நிர்வாகம்",
                user: "பயனர்",
                ourservice: "எங்கள் சேவை",
                aboutus: "எங்களை பற்றி",

                //home herosection page
                heroHeading: "சிறந்த எதிர்காலத்திற்கான தூய்மை",
                heropara1: "தமிழகத்தில் தூய்மையை பராமரிக்கும் பணியில் எங்களுடன் சேருங்கள்.",
                heropara2: "உங்கள் புகார்களைச் சமர்ப்பித்து, அனைவருக்கும் தூய்மையான சூழலை உருவாக்க எங்களுக்கு உதவுங்கள்.",
                herobutton: "மேலும் அறிக",

                //home ourservice
                serviceheading: "புகார் மேலாண்மையை எளிமையாக்குதல்",
                servicepara: "ஒரு கணக்கை உருவாக்கவும், உங்கள் புகாரை ஒரு குறிப்பிட்ட துறை வகையுடன் இடுகையிடவும், அதன் நிலையை நீங்கள் எளிதாகக் கண்காணிக்கலாம். எங்கள் பயனர் நட்பு இயங்குதளமானது செயல்முறையை ஒழுங்குபடுத்துகிறது, உங்கள் கவலைகள் உடனடியாக தீர்க்கப்படுவதை உறுதி செய்கிறது.",
                serviceP1heading: "சிரமமின்றி புகார் சமர்ப்பிப்பு",
                serviceP1para: "ஒரு சில கிளிக்குகளில், மின்சாரம், தண்ணீர், வடிகால், சொத்து சேதம் மற்றும் பலவற்றைப் பற்றிய உங்கள் புகாரைச் சமர்ப்பிக்கவும். எங்கள் உள்ளுணர்வு இடைமுகம் அதை எளிமையாகவும் வசதியாகவும் செய்கிறது.",
                serviceP2heading: "வெளிப்படையான நிலை கண்காணிப்பு",
                serviceP2para: "உங்கள் புகாரின் முன்னேற்றம் குறித்து தொடர்ந்து அறிந்திருங்கள். எங்கள் அமைப்பு நிகழ்நேர புதுப்பிப்புகளை வழங்குகிறது, வெளிப்படைத்தன்மை மற்றும் பொறுப்புணர்வை உறுதி செய்கிறது.",
                serviceP3heading: "தானியங்கி இருப்பிட கண்டறிதல்",
                serviceP3para: "எங்கள் கணினியில் தானியங்கி இருப்பிடக் கண்டறிதல் மற்றும் புவி குறியிடப்பட்ட புகைப்படங்கள் சிக்கலைத் தீர்க்க உதவியாக இருக்கும், அந்த இருப்பிடம் புகாரின் இருப்பிடமாக இல்லாவிட்டால், பயனர் இருப்பிடத்தை மாற்றலாம்",
                serviceP4heading: "புகாரைத் தீர்ப்பது பற்றிய ஆலோசனை / கருத்து",
                serviceP4para: "எங்கள் அமைப்பில், பயனர் குறிப்பிட்ட நிர்வாகிக்கு கருத்து (அல்லது) பரிந்துரைகளை வழங்கலாம்",

                //home aboutus
                aboutusheading: "முக்கிய நகர பிரச்சனைகளுக்கு தீர்வு",
                aboutuspara: "Empowering Tamil Nadu என்பது ஒரு கணக்கை உருவாக்கவும், மின்சாரம், தண்ணீர், வடிகால், சொத்து சேதம், பொதுக் கழிப்பறை பராமரிப்பு, குப்பைகள் மற்றும் பலவற்றைப் பற்றிய புகார்களை இடுகையிடவும் பயனர்களை அனுமதிக்கும் இணையதளமாகும். இந்தச் சிக்கல்களைத் தீர்க்கவும், நகரத்தை சுத்தமாகவும், செயல்பாட்டுடனும் வைத்திருக்கவும் நிர்வாகிகள் பணிபுரிகின்றனர்.",
                aboutusP1heading: "மின்சாரம்",
                aboutusP1para: "மின்சாரம் தொடர்பான பிரச்சனைகளைப் புகாரளித்து, அவற்றைத் திறமையாகத் தீர்க்கவும்.",
                aboutusP2heading: "தண்ணீர்",
                aboutusP2para: "தண்ணீர் தொடர்பான புகார்களை சமர்ப்பித்து, அனைவருக்கும் சுத்தமான குடிநீர் வழங்குவதை உறுதிசெய்யவும்.",
                aboutusP3heading: "பொதுச் சொத்து சேதம்",
                aboutusP3para: "பொது அல்லது அரசுக்குச் சொந்தமான சொத்துகள் தொடர்பான பிரச்சனைகளைப் புகாரளித்து, அவற்றைத் திறமையாகத் தீர்க்கவும்.",
                aboutusP4heading: "வடிகால்",
                aboutusP4para: "உங்கள் பகுதியில் உள்ள வடிகால் பிரச்சனைகளைப் புகாரளித்து அவற்றை திறம்பட தீர்க்கவும்.",
                aboutusP5heading: "கழிப்பறை பராமரிப்பு",
                aboutusP5para: "உங்கள் பகுதியில் உள்ள பொதுக் கழிப்பறையின் சிக்கல்களைப் புகாரளிக்கவும், அதனால் நாங்கள் அதை திறம்பட சுத்தம் செய்யலாம்.",
                aboutusP6heading: "குப்பை",
                aboutusP6para: "உங்கள் பகுதியில் உள்ள குப்பை பிரச்சினைகளை எங்கள் இணையதளம் மூலம் தெரிவிக்கவும்.",
                aboutusP7heading: "மற்றவைகள்",
                aboutusP7para: "மேலே உள்ள புகார் வகை உங்கள் புகார் வகையுடன் தொடர்புடையதாக இல்லை என்றால், நீங்கள் மற்றவர்களைத் தேர்ந்தெடுத்து புகார் வகையை நிரப்பலாம்.",

                //home faq
                faqheading: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
                faqpara: "புகாரைச் சமர்ப்பிக்கும் செயல்முறை, பதில் நேரங்கள் மற்றும் பின்தொடர்தல்கள் பற்றிய பொதுவான கேள்விகளுக்கான பதில்களைக் கண்டறியவும்.",
                faqP1question: "புகாரை எவ்வாறு சமர்ப்பிப்பது?",
                faqP1answer: "புகாரைச் சமர்ப்பிக்க, ஒரு கணக்கை உருவாக்கி, நீங்கள் எதிர்கொள்ளும் சிக்கல் குறித்த விவரங்களுடன் புகார் படிவத்தை நிரப்பவும்.",
                faqP2question: "மறுமொழி நேரம் என்ன?",
                faqP2answer: "புகாரின் தன்மை மற்றும் தீவிரத்தைப் பொறுத்து பதில் நேரம் மாறுபடலாம். எங்கள் குழு முடிந்தவரை விரைவாக புகார்களை தீர்க்கவும் தீர்க்கவும் முயற்சிக்கிறது.",
                faqP3question: "நான் எவ்வாறு பின்தொடர்வது?",
                faqP3answer: "உங்கள் கணக்கில் உள்நுழைந்து உங்கள் புகாரின் நிலையைச் சரிபார்ப்பதன் மூலம் உங்கள் புகாரைப் பின்தொடரலாம். தேவைப்பட்டால் மின்னஞ்சல் அல்லது தொலைபேசி மூலமாகவும் எங்கள் குழு புதுப்பிப்புகளை வழங்கும்.",
                faqP4question: "எந்த வகையான புகார்கள் ஏற்கப்படுகின்றன?",
                faqP4answer: "மின்சாரம், தண்ணீர், வடிகால், சொத்து சேதம் மற்றும் தமிழகத்தின் தூய்மை மற்றும் நல்வாழ்வைப் பாதிக்கும் இதே போன்ற பிரச்சினைகள் தொடர்பான புகார்களை நாங்கள் ஏற்றுக்கொள்கிறோம்.",
                faqP5question: "புகார்கள் எவ்வாறு தீர்க்கப்படுகின்றன?",
                faqP5answer: "எங்கள் நிர்வாகி குழு ஒவ்வொரு புகாரையும் மதிப்பாய்வு செய்து, சிக்கலைத் தீர்க்க தேவையான நடவடிக்கைகளை எடுக்கிறது. தீர்க்கப்பட்டதும், புகாரின் நிலை அதற்கேற்ப புதுப்பிக்கப்படும்.",

                //home contact section
                contactheading: "இன்னும் கேள்விகள் உள்ளதா?",
                contactpara: "மேலும் உதவிக்கு எங்களைத் தொடர்பு கொள்ளவும்.",
                contactbutton: "தொடர்பு கொள்ளவும்",


                //user suggestion
                suggestionheading: "உங்கள் பரிந்துரைகளைப் பகிரவும்",
                suggestionpara: "இந்தப் பக்கத்தில், குறிப்பிட்ட நிர்வாகிக்கு உங்கள் ஆலோசனை அல்லது கருத்தைத் தெரிவிக்கலாம், இது உங்கள் சிக்கலைக் கண்டறிந்து புகாரைத் தீர்க்கும் நேரத்தை அதிகரிக்க நிர்வாகிக்கு உதவுகிறது!"

            }
        }
    }
})