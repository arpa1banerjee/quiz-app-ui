import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTrendingComponent } from './profile-trending.component';

describe('ProfileTrendingComponent', () => {
  let component: ProfileTrendingComponent;
  let fixture: ComponentFixture<ProfileTrendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileTrendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
