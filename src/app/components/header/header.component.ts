import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuOpen = false;
  activeSubmenu: string | null = null;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    // Fermer les sous-menus quand on ferme le menu principal
    if (!this.isMenuOpen) {
      this.activeSubmenu = null;
    }

    // Empêcher le défilement du body quand le menu est ouvert
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  toggleSubMenu(event: Event, menuName: string) {
    // Sur mobile uniquement
    if (window.innerWidth <= 768) {
      event.preventDefault();
      this.activeSubmenu = this.activeSubmenu === menuName ? null : menuName;
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.activeSubmenu = null;
    document.body.style.overflow = '';
  }
}
