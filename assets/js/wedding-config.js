/**
 * Wedding content lives here so personal details can be updated without touching
 * presentation or interaction code. Empty values keep optional sections hidden.
 */
export const weddingConfig = Object.freeze({
  groomArabic: 'محمد أديب طويل',
  groomEnglish: 'Mohamad Adib Tawil',
  brideArabic: 'رزان',
  brideEnglish: 'Razan',
  weddingDate: '', // ISO date: YYYY-MM-DD
  startTime: '', // 24-hour local time: HH:MM
  endTime: '',
  timeZone: '', // IANA time zone, e.g. Asia/Damascus
  venue: '',
  address: '',
  mapsUrl: '',
  audience: '',
  dressCode: '',
  guestInstructions: '',
  childrenInvited: null,
  rsvp: {
    enabled: false,
    contactName: '',
    whatsappNumber: '', // International digits only, without +
    deadline: '',
    companionsAllowed: null,
    requestAttendeeCount: false,
    messageTemplate: '',
  },
  invitationVideo: '', // Relative asset path, e.g. assets/video/invitation.mp4
  invitationPoster: '',
  socialPreview: 'assets/images/social-preview.svg',
  wording: {
    occasion: '',
    opening: '',
    closing: '',
    familyNames: [],
    story: '',
  },
});
