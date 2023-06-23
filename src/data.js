import cards from './assets/icons/cards.png'
import guideImg1 from './assets/icons/guide1.png'
import guideImg2 from './assets/icons/guide2.png'

export const data = {
  startPage: {
    buttonText: 'Start',
  },
  mainPage: {
    title: 'Immerse Yourself in a Multi-Sensorial Experience',
    subtitle: 'Created by You and Shraddha Kapoor',
    image: {src: cards, alt: 'demo'},
    paragraphs: [
      'Explore a new form of self-expression as you create your own multi-sensorial visual experience alongside Shraddha Kapoor.',
      'Hurry! Don\'t miss out on this extraordinary opportunity to unleash your creativity.',
    ],
    buttonText: 'Enter Experience',
  },
  instructionsPage: {
    title: 'Instructions',
    subtitle: 'Visually show users what they should expect.',
    images: [
      {src: 'https://picsum.photos/200', alt: 'Step 1', text: '1. Answer 3 Questions'},
      {src: 'https://picsum.photos/200', alt: 'Step 2', text: '2. Upload Photo'},
      {src: 'https://picsum.photos/200', alt: 'Step 3', text: '3. Share for a chance to meet Shraddha Kapoor'},
    ],
    buttonText: 'Unleash My Creativity',
  },
  questionsPage: {
    questions: [
      {
        question: 'Which fantasy location best represents you?',
        answers: ['Sky Island', 'Underwater Kingdom', 'Spiritual Oasis'],
      },
      {
        question: 'When would you enjoy your Pulpy Minute Maid?',
        answers: ['To brighten a dreary monsoon day', 'To hydrate on a warm, sunny day', 'As a refreshing start to a winter morning'],
      },
      {
        question: 'How do you drink your Pulpy Minute Maid?',
        answers: ['Sip it!', 'Chew it!', 'Gulp it!'],
      },
    ],
    submitButton: 'Submit',
    backButton: 'Back',
  },
  ageVerification: {
    title: 'Welcome',
    message: 'Please, verify your age to enter.',
    buttonTextUnder18: 'I am under 18',
    buttonTextOver18: 'I am over 18',
    termsText: 'By entering this site you are agreeing to the Terms of Use and Privacy Policy.',
  },
  cookiePage: {
    title: 'Cookie Policy',
    message: 'Lorem ipsum dolor sit amet consectetur. Mauris in viverra dui elit ultricies mattis ligula pharetra.',
    buttonTextDecline: 'Cookie Settings',
    buttonTextAccept: 'Accept All',
  },
  privacyPolicy: {
    title: 'Privacy Policy',
    message: 'Lorem ipsum dolor sit amet consectetur. Nibh ut purus sapien faucibus augue donec pulvinar in nunc. Tincidunt maecenas ornare et duis. Vel integer ultrices egestas tempor. Viverra nunc dictum non nulla felis. Et porta nisl ipsum cras in eget dolor. Cursus vitae montes commodo cursus non pretium. Sit id ullamcorper turpis aliquam ipsum vivamus ultrices. In quis mauris pharetra porta ultrices mauris viverra. Laoreet amet eget nulla euismod. Faucibus semper proin est amet maecenas enim faucibus nec suspendisse. Volutpat volutpat facilisi nunc ultricies. Elementum id diam magna eu sed. Congue tempor id cursus in malesuada aliquet turpis. Lorem et sem scelerisque morbi gravida. Nulla aliquet dui fermentum eu dignissim fermentum eu lacus sem. Maecenas ultrices non urna nunc sit nam laoreet sit. Ut eu consectetur arcu odio. Lectus elementum fermentum adipiscing gravida sed et eget massa. Aliquet in rhoncus egestas arcu mattis ultricies malesuada.',
    termsText: 'I agree with the <a href="#">Terms and Conditions</a>',
    errorTermsText: 'You must agree to the Terms and Conditions',
    policyText: 'I agree with the <a href="#">Privacy Policy</a>',
    errorPolicyText: 'You must agree to the Privacy Policy',
    ageText: 'I agree I am at least <a href="#">18 years old</a>',
    errorAgeText: 'You must confirm your age',
    buttonTextDecline: 'Decline',
    buttonTextAccept: 'Accept',
  },
  uploadPage: {
    backButton: 'Back',
    title: 'Upload a Photo',
    description: 'Upload a photo to add yourself to your creation.',
    subTitle: 'Photo Guidelines For Best Results',
    guidelinesTitle: 'Guidelines',
    guidelines: [
      {
        image1: guideImg1,
        image2: guideImg2,
        text1: 'Clear, not busy background',
        text2: 'Colored photo',
        text3: 'In-focus picture',
        text4: 'One person showing',
      },
    ],
    uploadButtonText: 'Click to upload',
    supportedFormats: 'Supported formats: JPG, PNG',
    removeImageButtonText: 'Remove Image',
    deliveryTitle: 'Choose Video Delivery',
    deliveryDescription: 'To safeguard your video output and maintain access to it, please share your WhatsApp number or email address for secure delivery and backup.',
    contactTitle: 'Enter WhatsApp Number or Email Address',
    contactPlaceholder: 'Phone',
    finalizeButtonText: 'Finalize & Send',
  },
  processingPage: {
    title: 'Processing Video...',
    description: 'Share your creation and tag us on social media using #minutemaid for an incredible opportunity to meet Shraddha Kapoor!',
    estimatedTime: 2,
    contactInfo: ''
  }
}
