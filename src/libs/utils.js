export function isMobile() {
   const userAgent = navigator.userAgent || navigator.vendor || window.opera;
   return /android|iPhone|iPad|iPod|blackberry|iemobile|opera mini/i.test(userAgent);
}
