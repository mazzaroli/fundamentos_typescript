(()=>{"use strict";var e={987:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Album=void 0;const i=r(123);class o extends i.Item{constructor(e,t){super(e,t),this.pictures=[]}addPicture(e){this.pictures.push(e)}}t.Album=o},123:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Item=void 0,t.Item=class{constructor(e,t){this.id=e,this.title=t}}},945:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.PhotoOrientation=void 0,(r=t.PhotoOrientation||(t.PhotoOrientation={}))[r.Landscape=0]="Landscape",r[r.Portrait=1]="Portrait",r[r.Square=2]="Square",r[r.Panorama=3]="Panorama"},449:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Picture=void 0;const i=r(123);class o extends i.Item{constructor(e,t,r,i){super(e,t),this._date=r,this._orientation=i}toString(){return`[id: ${this.id},\n                 title: ${this.title},\n                 orientation: ${this._orientation}]`}}t.Picture=o},536:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.User=void 0,t.User=class{constructor(e,t,r,i){this.id=e,this.username=t,this.firstName=r,this.isPro=i,this.album=[]}addAlbum(e){this.album.push(e)}removeAlbum(e){const t=this.album.findIndex((t=>t.id===e.id));let r;return t>=0&&(r=this.album[t],this.album.splice(t,1)),r}}}},t={};function r(i){var o=t[i];if(void 0!==o)return o.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,r),s.exports}(()=>{const e=r(987),t=r(945),i=r(449),o=new(r(536).User)(1,"carlosmzz","Carlos",!0),s=new e.Album(1,"Shakilo O'neal"),a=new i.Picture(1,"TS Course","2021-08",t.PhotoOrientation.Square);o.addAlbum(s),s.addPicture(a),console.log(o),o.removeAlbum(s),console.log(o)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJ3Q0FDQUEsT0FBT0MsZUFBZUMsRUFBUyxhQUFjLENBQUVDLE9BQU8sSUFDdERELEVBQVFFLFdBQVEsRUFDaEIsTUFBTUMsRUFBUyxFQUFRLEtBQ3ZCLE1BQU1ELFVBQWNDLEVBQU9DLEtBQ3ZCQyxZQUFZQyxFQUFJQyxHQUNaQyxNQUFNRixFQUFJQyxHQUNWRSxLQUFLQyxTQUFXLEdBRXBCQyxXQUFXQyxHQUNQSCxLQUFLQyxTQUFTRyxLQUFLRCxJQUczQlosRUFBUUUsTUFBUUEsRyxZQ1poQkosT0FBT0MsZUFBZUMsRUFBUyxhQUFjLENBQUVDLE9BQU8sSUFDdERELEVBQVFJLFVBQU8sRUFPZkosRUFBUUksS0FOUixNQUNJQyxZQUFZQyxFQUFJQyxHQUNaRSxLQUFLSCxHQUFLQSxFQUNWRyxLQUFLRixNQUFRQSxLLFlDRnJCLElBQVdPLEVBSFhoQixPQUFPQyxlQUFlQyxFQUFTLGFBQWMsQ0FBRUMsT0FBTyxJQUN0REQsRUFBUWMsc0JBQW1CLEdBRWhCQSxFQUtXZCxFQUFRYyxtQkFBcUJkLEVBQVFjLGlCQUFtQixLQUp6REEsRUFBNEIsVUFBSSxHQUFLLFlBQ3REQSxFQUFpQkEsRUFBMkIsU0FBSSxHQUFLLFdBQ3JEQSxFQUFpQkEsRUFBeUIsT0FBSSxHQUFLLFNBQ25EQSxFQUFpQkEsRUFBMkIsU0FBSSxHQUFLLFksY0NQekRoQixPQUFPQyxlQUFlQyxFQUFTLGFBQWMsQ0FBRUMsT0FBTyxJQUN0REQsRUFBUWUsYUFBVSxFQUNsQixNQUFNWixFQUFTLEVBQVEsS0FDdkIsTUFBTVksVUFBZ0JaLEVBQU9DLEtBQ3pCQyxZQUFZQyxFQUFJQyxFQUFPUyxFQUFPQyxHQUMxQlQsTUFBTUYsRUFBSUMsR0FDVkUsS0FBS08sTUFBUUEsRUFDYlAsS0FBS1EsYUFBZUEsRUFFeEJDLFdBQ0ksTUFBTyxRQUFRVCxLQUFLSCxnQ0FDRkcsS0FBS0YseUNBQ0NFLEtBQUtRLGlCQUdyQ2pCLEVBQVFlLFFBQVVBLEcsWUNmbEJqQixPQUFPQyxlQUFlQyxFQUFTLGFBQWMsQ0FBRUMsT0FBTyxJQUN0REQsRUFBUW1CLFVBQU8sRUF1QmZuQixFQUFRbUIsS0F0QlIsTUFDSWQsWUFBWUMsRUFBSWMsRUFBVUMsRUFBV0MsR0FDakNiLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtXLFNBQVdBLEVBQ2hCWCxLQUFLWSxVQUFZQSxFQUNqQlosS0FBS2EsTUFBUUEsRUFDYmIsS0FBS2MsTUFBUSxHQUVqQkMsU0FBU0QsR0FDTGQsS0FBS2MsTUFBTVYsS0FBS1UsR0FFcEJFLFlBQVlGLEdBRVIsTUFBTUcsRUFBUWpCLEtBQUtjLE1BQU1JLFdBQVVDLEdBQUtBLEVBQUV0QixLQUFPaUIsRUFBTWpCLEtBQ3ZELElBQUl1QixFQUtKLE9BSklILEdBQVMsSUFDVEcsRUFBZXBCLEtBQUtjLE1BQU1HLEdBQzFCakIsS0FBS2MsTUFBTU8sT0FBT0osRUFBTyxJQUV0QkcsTUNyQlhFLEVBQTJCLEdBRy9CLFNBQVNDLEVBQW9CQyxHQUU1QixJQUFJQyxFQUFlSCxFQUF5QkUsR0FDNUMsUUFBcUJFLElBQWpCRCxFQUNILE9BQU9BLEVBQWFsQyxRQUdyQixJQUFJb0MsRUFBU0wsRUFBeUJFLEdBQVksQ0FHakRqQyxRQUFTLElBT1YsT0FIQXFDLEVBQW9CSixHQUFVRyxFQUFRQSxFQUFPcEMsUUFBU2dDLEdBRy9DSSxFQUFPcEMsUSxNQ25CZixNQUFNc0MsRUFBVSxFQUFRLEtBQ2xCQyxFQUFzQixFQUFRLEtBQzlCQyxFQUFZLEVBQVEsS0FFcEJDLEVBQU8sSUFERSxFQUFRLEtBQ0N0QixNQUFLLEVBQUcsWUFBYSxVQUFVLEdBQ2pESSxFQUFRLElBQUllLEVBQVFwQyxNQUFNLEVBQUcsa0JBQzdCVSxFQUFVLElBQUk0QixFQUFVekIsUUFBUSxFQUFHLFlBQWEsVUFBV3dCLEVBQW9CekIsaUJBQWlCNEIsUUFFdEdELEVBQUtqQixTQUFTRCxHQUNkQSxFQUFNWixXQUFXQyxHQUNqQitCLFFBQVFDLElBQUlILEdBRVpBLEVBQUtoQixZQUFZRixHQUNqQm9CLFFBQVFDLElBQUlILEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waG90by1hcHAvLi9zcmMvYWxidW0udHMiLCJ3ZWJwYWNrOi8vcGhvdG8tYXBwLy4vc3JjL2l0ZW0udHMiLCJ3ZWJwYWNrOi8vcGhvdG8tYXBwLy4vc3JjL3Bob3RvLW9yaWVudGF0aW9uLnRzIiwid2VicGFjazovL3Bob3RvLWFwcC8uL3NyYy9waWN0dXJlLnRzIiwid2VicGFjazovL3Bob3RvLWFwcC8uL3NyYy91c2VyLnRzIiwid2VicGFjazovL3Bob3RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9waG90by1hcHAvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQWxidW0gPSB2b2lkIDA7XG5jb25zdCBpdGVtXzEgPSByZXF1aXJlKFwiLi9pdGVtXCIpO1xuY2xhc3MgQWxidW0gZXh0ZW5kcyBpdGVtXzEuSXRlbSB7XG4gICAgY29uc3RydWN0b3IoaWQsIHRpdGxlKSB7XG4gICAgICAgIHN1cGVyKGlkLCB0aXRsZSk7XG4gICAgICAgIHRoaXMucGljdHVyZXMgPSBbXTtcbiAgICB9XG4gICAgYWRkUGljdHVyZShwaWN0dXJlKSB7XG4gICAgICAgIHRoaXMucGljdHVyZXMucHVzaChwaWN0dXJlKTtcbiAgICB9XG59XG5leHBvcnRzLkFsYnVtID0gQWxidW07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSXRlbSA9IHZvaWQgMDtcbmNsYXNzIEl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSkge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB9XG59XG5leHBvcnRzLkl0ZW0gPSBJdGVtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBob3RvT3JpZW50YXRpb24gPSB2b2lkIDA7XG52YXIgUGhvdG9PcmllbnRhdGlvbjtcbihmdW5jdGlvbiAoUGhvdG9PcmllbnRhdGlvbikge1xuICAgIFBob3RvT3JpZW50YXRpb25bUGhvdG9PcmllbnRhdGlvbltcIkxhbmRzY2FwZVwiXSA9IDBdID0gXCJMYW5kc2NhcGVcIjtcbiAgICBQaG90b09yaWVudGF0aW9uW1Bob3RvT3JpZW50YXRpb25bXCJQb3J0cmFpdFwiXSA9IDFdID0gXCJQb3J0cmFpdFwiO1xuICAgIFBob3RvT3JpZW50YXRpb25bUGhvdG9PcmllbnRhdGlvbltcIlNxdWFyZVwiXSA9IDJdID0gXCJTcXVhcmVcIjtcbiAgICBQaG90b09yaWVudGF0aW9uW1Bob3RvT3JpZW50YXRpb25bXCJQYW5vcmFtYVwiXSA9IDNdID0gXCJQYW5vcmFtYVwiO1xufSkoUGhvdG9PcmllbnRhdGlvbiA9IGV4cG9ydHMuUGhvdG9PcmllbnRhdGlvbiB8fCAoZXhwb3J0cy5QaG90b09yaWVudGF0aW9uID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QaWN0dXJlID0gdm9pZCAwO1xuY29uc3QgaXRlbV8xID0gcmVxdWlyZShcIi4vaXRlbVwiKTtcbmNsYXNzIFBpY3R1cmUgZXh0ZW5kcyBpdGVtXzEuSXRlbSB7XG4gICAgY29uc3RydWN0b3IoaWQsIHRpdGxlLCBfZGF0ZSwgX29yaWVudGF0aW9uKSB7XG4gICAgICAgIHN1cGVyKGlkLCB0aXRsZSk7XG4gICAgICAgIHRoaXMuX2RhdGUgPSBfZGF0ZTtcbiAgICAgICAgdGhpcy5fb3JpZW50YXRpb24gPSBfb3JpZW50YXRpb247XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYFtpZDogJHt0aGlzLmlkfSxcbiAgICAgICAgICAgICAgICAgdGl0bGU6ICR7dGhpcy50aXRsZX0sXG4gICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiAke3RoaXMuX29yaWVudGF0aW9ufV1gO1xuICAgIH1cbn1cbmV4cG9ydHMuUGljdHVyZSA9IFBpY3R1cmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVXNlciA9IHZvaWQgMDtcbmNsYXNzIFVzZXIge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB1c2VybmFtZSwgZmlyc3ROYW1lLCBpc1Bybykge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICAgICAgdGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWU7XG4gICAgICAgIHRoaXMuaXNQcm8gPSBpc1BybztcbiAgICAgICAgdGhpcy5hbGJ1bSA9IFtdO1xuICAgIH1cbiAgICBhZGRBbGJ1bShhbGJ1bSkge1xuICAgICAgICB0aGlzLmFsYnVtLnB1c2goYWxidW0pO1xuICAgIH1cbiAgICByZW1vdmVBbGJ1bShhbGJ1bSkge1xuICAgICAgICAvLyBCdXNjYXIgb2JqZXRvIEFsYnVtXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5hbGJ1bS5maW5kSW5kZXgoYSA9PiBhLmlkID09PSBhbGJ1bS5pZCk7XG4gICAgICAgIGxldCBkZWxldGVkQWxidW07XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBkZWxldGVkQWxidW0gPSB0aGlzLmFsYnVtW2luZGV4XTtcbiAgICAgICAgICAgIHRoaXMuYWxidW0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVsZXRlZEFsYnVtO1xuICAgIH1cbn1cbmV4cG9ydHMuVXNlciA9IFVzZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBhbGJ1bV8xID0gcmVxdWlyZShcIi4vYWxidW1cIik7XG5jb25zdCBwaG90b19vcmllbnRhdGlvbl8xID0gcmVxdWlyZShcIi4vcGhvdG8tb3JpZW50YXRpb25cIik7XG5jb25zdCBwaWN0dXJlXzEgPSByZXF1aXJlKFwiLi9waWN0dXJlXCIpO1xuY29uc3QgdXNlcl8xID0gcmVxdWlyZShcIi4vdXNlclwiKTtcbmNvbnN0IHVzZXIgPSBuZXcgdXNlcl8xLlVzZXIoMSwgJ2Nhcmxvc216eicsICdDYXJsb3MnLCB0cnVlKTtcbmNvbnN0IGFsYnVtID0gbmV3IGFsYnVtXzEuQWxidW0oMSwgXCJTaGFraWxvIE8nbmVhbFwiKTtcbmNvbnN0IHBpY3R1cmUgPSBuZXcgcGljdHVyZV8xLlBpY3R1cmUoMSwgJ1RTIENvdXJzZScsICcyMDIxLTA4JywgcGhvdG9fb3JpZW50YXRpb25fMS5QaG90b09yaWVudGF0aW9uLlNxdWFyZSk7XG4vLyBjcmVhbW9zIHJlbGFjaW9uZXNcbnVzZXIuYWRkQWxidW0oYWxidW0pO1xuYWxidW0uYWRkUGljdHVyZShwaWN0dXJlKTtcbmNvbnNvbGUubG9nKHVzZXIpO1xuLy8gQm9ycmFyIEFsYnVtXG51c2VyLnJlbW92ZUFsYnVtKGFsYnVtKTtcbmNvbnNvbGUubG9nKHVzZXIpO1xuIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiQWxidW0iLCJpdGVtXzEiLCJJdGVtIiwiY29uc3RydWN0b3IiLCJpZCIsInRpdGxlIiwic3VwZXIiLCJ0aGlzIiwicGljdHVyZXMiLCJhZGRQaWN0dXJlIiwicGljdHVyZSIsInB1c2giLCJQaG90b09yaWVudGF0aW9uIiwiUGljdHVyZSIsIl9kYXRlIiwiX29yaWVudGF0aW9uIiwidG9TdHJpbmciLCJVc2VyIiwidXNlcm5hbWUiLCJmaXJzdE5hbWUiLCJpc1BybyIsImFsYnVtIiwiYWRkQWxidW0iLCJyZW1vdmVBbGJ1bSIsImluZGV4IiwiZmluZEluZGV4IiwiYSIsImRlbGV0ZWRBbGJ1bSIsInNwbGljZSIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJhbGJ1bV8xIiwicGhvdG9fb3JpZW50YXRpb25fMSIsInBpY3R1cmVfMSIsInVzZXIiLCJTcXVhcmUiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==