import { createBrowserRouter } from 'react-router';
import { LandingPage } from './components/LandingPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { CollectionGallery } from './components/CollectionGallery';
import { SeasonalCurations } from './components/SeasonalCurations';
import { OurStory } from './components/OurStory';
import { Craftsmanship } from './components/Craftsmanship';
import { RootLayout } from './components/RootLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: LandingPage,
      },
      {
        path: 'product/:productId',
        Component: ProductDetailPage,
      },
      {
        path: 'collection/:category',
        Component: CollectionGallery,
      },
      {
        path: 'seasonal-curations',
        Component: SeasonalCurations,
      },
      {
        path: 'our-story',
        Component: OurStory,
      },
      {
        path: 'craftsmanship',
        Component: Craftsmanship,
      },
    ],
  },
]);